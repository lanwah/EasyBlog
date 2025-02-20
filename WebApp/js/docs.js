class Docs {
  docName = '';
  language = 'en-US';
  version = '1.0';
  docId = '';

  constructor() {
    document.addEventListener('DOMContentLoaded', () => this.init());
  }

  init() {
    const self = this;
    const docData = document.getElementById('docData');
    if (docData) {
      this.docName = docData.getAttribute('data-docName');
      this.language = docData.getAttribute('data-language');
      this.version = docData.getAttribute('data-version');
      this.docId = docData.getAttribute('data-id');
    }

    const docLi = document.getElementById(this.docId);
    if (docLi) {
      docLi.classList.add('active');
      let parent = docLi.parentElement;

      while (parent) {
        if (parent.tagName === 'UL') {
          if (parent.classList.contains('root-list')) {
            break;
          }
          parent.classList.add('active');
        }
        if (parent.tagName === 'LI') {
          // 取相同层级的 class= caret
          const caret = parent.querySelector('.caret');
          if (caret) {
            caret.classList.add('caret-down');
          }
        }
        parent = parent.parentElement;
      }
    }

    // set selected value for version select
    const versionSelect = document.getElementById('versionSelect');
    if (versionSelect) {
      const options = versionSelect.querySelectorAll('option');
      options.forEach(option => {
        if (option.value === this.version) {
          option.selected = true;
        }
      });
    }

    document.getElementById('versionSelect')?.addEventListener('change', function () {
      const selectedValue = this.value;
      if (selectedValue != this.version) {
        self.redirectToVersion(selectedValue);
      }
    });

    var toggler = document.getElementsByClassName("caret");
    for (var i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function () {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
      });
    }
  }

  async selectLanguage(language) {
    if (language === this.language) {
      window.location.reload();
      return;
    }
    let data = await this.getData(language, null);

    if (data) {
      let notNullFirst = data.filter(item => item.Docs.length > 0);
      let first = notNullFirst[0].Docs[0];

      if (first.HtmlPath) {
        var url = new URL(window.location.href);
        let relativePath = first.HtmlPath.replace(this.docName, '');
        url.pathname = `/docs/${this.docName}/${language}/${this.version}${relativePath}`;

        fetch(url.href)
          .then(response => {
            if (response.status === 404) {
              alert(`The language ${language} is not available for this document.`);
              return;
            } else {
              window.location.href = url.href;
            }
          });
      }
    } else {
      alert(`The language ${language} is not available for this document.`);
    }
  }

  async redirectToVersion(version) {
    let data = await this.getData(null, version);

    if (data) {
      let notNullFirst = data.filter(item => item.Docs.length > 0);
      let first = notNullFirst[0].Docs[0];

      if (first.HtmlPath) {
        var url = new URL(window.location.href);
        let relativePath = first.HtmlPath.replace(this.docName, '');
        url.pathname = `/docs/${this.docName}/${this.language}/${version}${relativePath}`;

        fetch(url.href)
          .then(response => {
            if (response.status === 404) {
              alert(`The version ${version} is not available for this document.`);
              return;
            } else {
              window.location.href = url.href;
            }
          });
      }
    } else {
      alert(`The version ${version} is not available for this document.`);
    }
  }

  async getData(language, version) {
    language = language || this.language;
    version = version || this.version;
    const url = `/data/${this.docName}/${language}-${version}.json`;

    let res = await fetch(url);
    if (!res.ok) {
      console.log('Error:', res.status);
      return null;
    }
    const data = await res.json();
    return data.Children;
  }

}
const doc = new Docs();
