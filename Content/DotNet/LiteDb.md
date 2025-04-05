# LiteDb

[TOC]

---

本文记录LiteDb的使用，建议初学者使用时先根据官方的文档进行学习。

![LookDown](../Images/Common/hand-down.png) [LiteDb官网](http://www.litedb.org/)

![LookDown](../Images/Common/hand-down.png) [LiteDb Doc](http://www.litedb.org/docs/)

![LookDown](../Images/Common/hand-down.png) [LiteDb Package](https://www.nuget.org/packages/LiteDB/#versions-body-tab)

![LookDown](../Images/Common/hand-down.png)[LiteDb API](http://www.litedb.org/api/)

![LookRight](../Images/Common/hand-right.png)[LiteDB - 一个单数据文件 .NET NoSQL 文档存储 - LiteDB](https://dev.listera.top/docs/litedb/)

## 封装的代码

<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding:0px 20px;height:45px;
            line-height:45px;letter-spacing:2px;">
	<div>LiteDbWrapper.cs</div>
	<div style="position:absolute;right:-22px;top:0px;height:45px;width:45px;background:#2196F3;transform:skew(45deg,0deg);z-index:-1;"></div>
</div>
<p style="margin-top:25px;"></p>


```C#
    /// <summary>
    /// 官网：http://www.litedb.org/
    /// GitHub:https://github.com/mbdavid?tab=repositories
    /// GitHub:https://github.com/mbdavid/LiteDB
    /// LiteDB连接字符串：http://www.litedb.org/docs/connection-string/
    /// http://www.litedb.org/docs/getting-started/
    /// </summary>
    public partial class LiteDbWrapper : IDisposable
    {
        /// <summary>
        /// 数据库文件名称
        /// </summary>
        public string FilePath
        {
            get;
            private set;
        }
        private LiteDatabase _liteDb;
        /// <summary>
        /// LiteDb数据库
        /// </summary>
        public LiteDatabase LiteDb
        {
            get
            {
                return this._liteDb;
            }
            private set
            {
                this._liteDb = value;
            }
        }

        /// <summary>
        /// 构造函数
        /// </summary>
        /// <param name="dbFilePath">数据库文件路径或连接字符串</param>
        /// <param name="autoInit">是否自动初始化，默认false</param>
        public LiteDbWrapper(string dbFilePath, bool autoInit = false)
        {
            this.FilePath = dbFilePath;

            if (autoInit)
            {
                this.InitialDb();
            }
        }

        /// <summary>
        /// 初始化LiteDB
        /// </summary>
        public virtual void InitialDb()
        {
            if (string.IsNullOrEmpty(this.FilePath))
            {
                throw new ArgumentNullException(nameof(this.FilePath));
            }

            if (null == this.LiteDb)
            {
                this.LiteDb = new LiteDatabase(this.FilePath);
            }
        }

        /// <summary>
        /// 执行数据库操作
        /// </summary>
        /// <param name="action"></param>
        public virtual void Do(Action<LiteDatabase> action)
        {
            if (null != this.LiteDb)
            {
                // 长连接
                action?.Invoke(this.LiteDb);
            }
            else
            {
                // 短连接
                using (var db = new LiteDatabase(this.FilePath))
                {
                    action?.Invoke(db);
                }
            }
        }
        /// <summary>
        /// 执行数组对象的操作
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="action"></param>
        /// <param name="name">Collection name (case insensitive)</param>
        public virtual void Do<T>(Action<ILiteCollection<T>> action, string name = null)
        {
            if (null != this.LiteDb)
            {
                // 长连接
                var col = this.LiteDb.GetCollection<T>(name);
                action?.Invoke(col);
            }
            else
            {
                // 短连接
                using (var db = new LiteDatabase(this.FilePath))
                {
                    var col = db.GetCollection<T>(name);
                    action?.Invoke(col);
                }
            }
        }

        /// <summary>
        /// 释放资源
        /// </summary>
        public virtual void Dispose()
        {
            if ((null != this.LiteDb))
            {
                this.LiteDb.Dispose();
            }
        }
    }

    public static class LiteDbExtensions
    {
        /// <summary>
        /// 根据Id存储文件，如果文件存在则更新
        /// </summary>
        /// <typeparam name="TFileId"></typeparam>
        /// <param name="db"></param>
        /// <param name="id"></param>
        /// <param name="filePath"></param>
        /// <param name="metaData"></param>
        /// <returns></returns>
        public static LiteFileInfo<TFileId> UploadFile<TFileId>(this LiteDatabase db, TFileId id, string filePath, BsonDocument metaData = null)
        {
            // Get file storage with Int Id
            var storage = db.GetStorage<TFileId>();

            // Upload a file from file system to database
            var liteFileInfo = storage.Upload(id, filePath);

            if ((null != liteFileInfo) && (null != metaData))
            {
                if (storage.Exists(liteFileInfo.Id))
                {
                    storage.SetMetadata(liteFileInfo.Id, metaData);
                }
            }

            return storage.FindById(liteFileInfo.Id);
        }
        /// <summary>
        /// 根据Id存储文件，如果文件存在则更新
        /// </summary>
        /// <typeparam name="TFileId"></typeparam>
        /// <param name="db"></param>
        /// <param name="id"></param>
        /// <param name="fileName"></param>
        /// <param name="stream"></param>
        /// <param name="metaData"></param>
        /// <returns></returns>
        public static LiteFileInfo<TFileId> UploadFile<TFileId>(this LiteDatabase db, TFileId id, string fileName, Stream stream, BsonDocument metaData = null)
        {
            // Get file storage with Int Id
            var storage = db.GetStorage<TFileId>();

            // Upload a file from Stream
            var liteFileInfo = storage.Upload(id, fileName, stream, metaData);
            return liteFileInfo;
        }

        /// <summary>
        /// 下载文件
        /// </summary>
        /// <param name="db"></param>
        /// <param name="id"></param>
        /// <param name="filePath"></param>
        /// <returns></returns>
        public static LiteFileInfo<TFileId> DownloadFile<TFileId>(this LiteDatabase db, TFileId id, string filePath)
        {
            // Get file storage with Int Id
            var storage = db.GetStorage<TFileId>();

            // And download later
            var liteFileInfo = storage.Download(id, filePath, true);

            return liteFileInfo;
        }
        /// <summary>
        /// 下载文件
        /// </summary>
        /// <typeparam name="TFileId"></typeparam>
        /// <param name="db"></param>
        /// <param name="id"></param>
        /// <param name="stream"></param>
        /// <returns></returns>
        public static LiteFileInfo<TFileId> DownloadFile<TFileId>(this LiteDatabase db, TFileId id, Stream stream)
        {
            // Get file storage with Int Id
            var storage = db.GetStorage<TFileId>();

            // And download later
            var liteFileInfo = storage.Download(id, stream);

            return liteFileInfo;
        }
        /// <summary>
        /// 删除文件
        /// </summary>
        /// <typeparam name="TFileId"></typeparam>
        /// <param name="db"></param>
        /// <param name="id"></param>
        /// <returns></returns>
        public static bool DeleteFile<TFileId>(this LiteDatabase db, TFileId id)
        {
            // Get file storage with Id
            var storage = db.GetStorage<TFileId>();

            // And delete file, return true if success, false if not found
            return storage.Delete(id);
        }
    }
```

<div style="display:inline-block;position:relative;background:#2196F3;color:white;text-align:center;padding:0px 20px;height:45px;
            line-height:45px;letter-spacing:2px;">
	<div>RegisterTypeManager.cs</div>
	<div style="position:absolute;right:-22px;top:0px;height:45px;width:45px;background:#2196F3;transform:skew(45deg,0deg);z-index:-1;"></div>
</div>
<p style="margin-top:25px;"></p>


```C#
    /// <summary>
    /// 自定义注册类型接口
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IRegisterType<T>
    {
        /// <summary>
        /// 注册
        /// </summary>
        void RegisterType();
        /// <summary>
        /// 序列化
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        BsonValue Serialize(T entity);
        /// <summary>
        /// 反序列化
        /// </summary>
        /// <param name="bsonValue"></param>
        /// <returns></returns>
        T Deserialize(BsonValue bsonValue);
    }

    public abstract class RegisterTypeBase<T> : IRegisterType<T>
    {
        /// <summary>
        /// 注册
        /// </summary>
        public void RegisterType() => BsonMapper.Global.RegisterType<T>(Serialize, Deserialize);
        /// <summary>
        /// 序列化
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public abstract BsonValue Serialize(T entity);
        /// <summary>
        /// 反序列化
        /// </summary>
        /// <param name="bsonValue"></param>
        /// <returns></returns>
        public abstract T Deserialize(BsonValue bsonValue);
    }

    public static class RegisterTypeManager
    {
        public static void RegisterType<T>(RegisterTypeBase<T> registerType)
        {
            registerType.RegisterType();
        }
    }

    public class PointMapper : RegisterTypeBase<Point>
    {
        public override Point Deserialize(BsonValue bsonValue)
        {
            var x = bsonValue["X"].AsInt32;
            var y = bsonValue["Y"].AsInt32;
            return new Point(x, y);
        }

        public override BsonValue Serialize(Point entity)
        {
            return new BsonDocument(new Dictionary<string, BsonValue>
            {
            {"X", entity.X},
            {"Y", entity.Y},
            });
        }
    }
	....
    ....
    ....
    ....
    // 注册自定义序列化/反序列化器
    RegisterTypeManager.RegisterType(new PointMapper());

```

## 相关参考

1. [LiteDB用法小结](https://zhuanlan.zhihu.com/p/365797378)
1. [SQLite 和 LiteDB 性能对比 | Code Bye](https://www.codebye.com/compare-sqlite-and-litedb.html#google_vignette)

