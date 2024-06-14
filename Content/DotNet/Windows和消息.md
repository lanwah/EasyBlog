# Windows 和消息

[TOC]

---

介绍具有基于 Windows 的图形用户界面的应用程序的元素。

[Windows and Messages](https://learn.microsoft.com/en-us/windows/win32/winmsg/windowing)

## 窗口过程

每个窗口都有一个关联的窗口过程 - 一个函数，用于处理发送到类的所有窗口或发布到所有窗口的所有消息。 窗口外观和行为的所有方面都取决于窗口过程对这些消息的响应。

| 名称                                                         | 说明                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [关于窗口过程](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/about-window-procedures) | 讨论窗口过程。 每个窗口都是特定窗口类的成员。 window 类确定单个窗口用于处理其消息的默认窗口过程。 |
| [使用窗口过程](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/using-window-procedures) | 介绍如何执行与窗口过程关联的以下任务。                       |
| [窗口过程参考](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/window-procedure-reference) | 包含 API 引用。                                              |

| 名称                                                         | 说明                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [**CallWindowProc**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-callwindowproca) | 将消息信息传递到指定的窗口过程。                             |
| [**DefWindowProc**](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-defwindowproca) | 调用默认窗口过程，为应用程序不处理的任何窗口消息提供默认处理。 此函数可确保处理每条消息。 使用窗口过程接收的相同参数调用 [**DefWindowProc**](https://learn.microsoft.com/zh-cn/windows/desktop/api/winuser/nf-winuser-defwindowproca)。 |
| [*WindowProc*](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-wndproc) | 一个应用程序定义的函数，用于处理发送到窗口的消息。 **WNDPROC** 类型定义指向此回调函数的指针。 [*WindowProc*](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-wndproc) 是应用程序定义的函数名称的占位符。 |

### 窗口函数

- [**AdjustWindowRect**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-adjustwindowrect)
- [**AdjustWindowRectEx**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-adjustwindowrectex)
- [**AllowSetForegroundWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-allowsetforegroundwindow)
- [**AnimateWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-animatewindow)
- [**AnyPopup**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-anypopup)
- [**ArrangeIconicWindows**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-arrangeiconicwindows)
- [**BeginDeferWindowPos**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-begindeferwindowpos)
- [**BringWindowToTop**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-bringwindowtotop)
- [**CalculatePopupWindowPosition**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-calculatepopupwindowposition)
- [**CascadeWindows**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-cascadewindows)
- [**ChangeWindowMessageFilter**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-changewindowmessagefilter)
- [**ChangeWindowMessageFilterEx**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-changewindowmessagefilterex)
- [**ChildWindowFromPoint**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-childwindowfrompoint)
- [**ChildWindowFromPointEx**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-childwindowfrompointex)
- [**CloseWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-closewindow)
- [**CreateWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createwindowa)
- [**CreateWindowEx**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-createwindowexa)
- [**DeferWindowPos**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-deferwindowpos)
- [**DeregisterShellHookWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-deregistershellhookwindow)
- [**DestroyWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-destroywindow)
- [**EndDeferWindowPos**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enddeferwindowpos)
- [**EndTask**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-endtask)
- [*EnumChildProc*](https://learn.microsoft.com/zh-cn/previous-versions/windows/desktop/legacy/ms633493(v=vs.85))
- [**EnumChildWindows**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumchildwindows)
- [**EnumThreadWindows**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumthreadwindows)
- [*EnumThreadWndProc*](https://learn.microsoft.com/zh-cn/previous-versions/windows/desktop/legacy/ms633496(v=vs.85))
- [**EnumWindows**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-enumwindows)
- [*EnumWindowsProc*](https://learn.microsoft.com/zh-cn/previous-versions/windows/desktop/legacy/ms633498(v=vs.85))
- [**FindWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-findwindowa)
- [**FindWindowEx**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-findwindowexa)
- [**GetAltTabInfo**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getalttabinfoa)
- [**GetAncestor**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getancestor)
- [**GetClientRect**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getclientrect)
- [**GetDesktopWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getdesktopwindow)
- [**GetForegroundWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getforegroundwindow)
- [**GetGUIThreadInfo**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getguithreadinfo)
- [**GetLastActivePopup**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getlastactivepopup)
- [**GetLayeredWindowAttributes**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getlayeredwindowattributes)
- [**GetNextWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getnextwindow)
- [**GetParent**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getparent)
- [**GetProcessDefaultLayout**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getprocessdefaultlayout)
- [**GetShellWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getshellwindow)
- [**GetSysColor**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getsyscolor)
- [**GetTitleBarInfo**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-gettitlebarinfo)
- [**GetTopWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-gettopwindow)
- [**GetWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindow)
- [**GetWindowDisplayAffinity**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowdisplayaffinity)
- [**GetWindowInfo**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowinfo)
- [**GetWindowModuleFileName**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowmodulefilenamea)
- [**GetWindowPlacement**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowplacement)
- [**GetWindowRect**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowrect)
- [**GetWindowText**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowtexta)
- [**GetWindowTextLength**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowtextlengtha)
- [**GetWindowThreadProcessId**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getwindowthreadprocessid)
- [**InternalGetWindowText**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-internalgetwindowtext)
- [**IsChild**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-ischild)
- [**IsGUIThread**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-isguithread)
- [**IsHungAppWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-ishungappwindow)
- [**IsIconic**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-isiconic)
- [**IsProcessDPIAware**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-isprocessdpiaware)
- [**IsWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-iswindow)
- [**IsWindowUnicode**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-iswindowunicode)
- [**IsWindowVisible**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-iswindowvisible)
- [**IsZoomed**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-iszoomed)
- [**LockSetForegroundWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-locksetforegroundwindow)
- [**LogicalToPhysicalPoint**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-logicaltophysicalpoint)
- [**MoveWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-movewindow)
- [**OpenIcon**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-openicon)
- [**PhysicalToLogicalPoint**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-physicaltologicalpoint)
- [**RealChildWindowFromPoint**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-realchildwindowfrompoint)
- [**RealGetWindowClass**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-realgetwindowclassw)
- [**RegisterShellHookWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registershellhookwindow)
- [**SetForegroundWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setforegroundwindow)
- [**SetLayeredWindowAttributes**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setlayeredwindowattributes)
- [**SetParent**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setparent)
- [**SetProcessDefaultLayout**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setprocessdefaultlayout)
- [**SetProcessDPIAware**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setprocessdpiaware)
- [**SetSysColors**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setsyscolors)
- [**SetWindowDisplayAffinity**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowdisplayaffinity)
- [**SetWindowFeedbackSettings**](https://learn.microsoft.com/zh-cn/previous-versions/windows/desktop/legacy/hh405402(v=vs.85))
- [**SetWindowPlacement**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowplacement)
- [**SetWindowPos**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowpos)
- [**SetWindowText**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setwindowtexta)
- [**ShowOwnedPopups**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-showownedpopups)
- [**ShowWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-showwindow)
- [**ShowWindowAsync**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-showwindowasync)
- [**SoundSentry**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-soundsentry)
- [**SwitchToThisWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-switchtothiswindow)
- [**TileWindows**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-tilewindows)
- [**UpdateLayeredWindow**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-updatelayeredwindow)
- [**UpdateLayeredWindowIndirect**](https://learn.microsoft.com/zh-cn/previous-versions/windows/desktop/legacy/ms633557(v=vs.85))
- [**WindowFromPhysicalPoint**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-windowfromphysicalpoint)
- [**WindowFromPoint**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-windowfrompoint)
- [**WinMain**](https://learn.microsoft.com/zh-cn/windows/win32/api/winbase/nf-winbase-winmain)
- [**WNDPROC**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-wndproc)

### 窗口消息 (窗口和消息)

- [**MN_GETHMENU**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/mn-gethmenu)
- [**WM_ERASEBKGND**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-erasebkgnd)
- [**WM_GETFONT**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-getfont)
- [**WM_GETTEXT**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-gettext)
- [**WM_GETTEXTLENGTH**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-gettextlength)
- [**WM_SETFONT**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-setfont)
- [**WM_SETICON**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-seticon)
- [**WM_SETTEXT**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-settext)

### 窗口通知

- [**WM_ACTIVATEAPP**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-activateapp)
- [**WM_CANCELMODE**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-cancelmode)
- [**WM_CHILDACTIVATE**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-childactivate)
- [**WM_CLOSE**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-close)
- [**WM_COMPACTING**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-compacting)
- [**WM_CREATE**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-create)
- [**WM_DESTROY**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-destroy)
- [**WM_DPICHANGED**](https://learn.microsoft.com/zh-cn/windows/win32/hidpi/wm-dpichanged)
- [**WM_ENABLE**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-enable)
- [**WM_ENTERSIZEMOVE**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-entersizemove)
- [**WM_EXITSIZEMOVE**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-exitsizemove)
- [**WM_GETICON**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-geticon)
- [**WM_GETMINMAXINFO**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-getminmaxinfo)
- [**WM_INPUTLANGCHANGE**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-inputlangchange)
- [**WM_INPUTLANGCHANGEREQUEST**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-inputlangchangerequest)
- [**WM_MOVE**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-move)
- [**WM_MOVING**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-moving)
- [**WM_NCACTIVATE**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-ncactivate)
- [**WM_NCCALCSIZE**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-nccalcsize)
- [**WM_NCCREATE**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-nccreate)
- [**WM_NCDESTROY**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-ncdestroy)
- [**WM_NULL**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-null)
- [**WM_QUERYDRAGICON**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-querydragicon)
- [**WM_QUERYOPEN**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-queryopen)
- [**WM_QUIT**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-quit)
- [**WM_SHOWWINDOW**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-showwindow)
- [**WM_SIZE**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-size)
- [**WM_SIZING**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-sizing)
- [**WM_STYLECHANGED**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-stylechanged)
- [**WM_STYLECHANGING**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-stylechanging)
- [**WM_THEMECHANGED**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-themechanged)
- [**WM_USERCHANGED**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-userchanged)
- [**WM_WINDOWPOSCHANGED**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-windowposchanged)
- [**WM_WINDOWPOSCHANGING**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-windowposchanging)



## 消息和消息队列

| [关于消息和消息队列](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/about-messages-and-message-queues) | 本部分讨论 Windows 消息和消息队列。                          |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [使用消息和消息队列](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/using-messages-and-message-queues) | 以下代码示例演示如何执行与 Windows 消息和消息队列关联的以下任务。 |
| [消息引用](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/message-and-message-queue-reference) | 包含 API 引用。                                              |

[关于消息和消息队列](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/about-messages-and-message-queues)

[使用消息和消息队列](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/using-messages-and-message-queues)

### WM_USER

```C++
#define WM_USER                         0x0400
```

| 范围                                                         | 含义                         |
| :----------------------------------------------------------- | :--------------------------- |
| 0 到 **WM_USER** –1                                          | 保留供系统使用的消息。       |
| **WM_USER** 到0x7FFF                                         | 专用窗口类使用的整数消息。   |
| [**通过0xBFFF**](https://learn.microsoft.com/zh-cn/windows/win32/winmsg/wm-app) WM_APP (0x8000) | 可供应用程序使用的消息。     |
| 0xC000到0xFFFF                                               | 供应用程序使用的字符串消息。 |
| 大于 0xFFFF                                                  | 由系统保留。                 |

>第一个范围 (0 到 **WM_USER** –1) 的消息编号由系统定义。 此区域中未显式定义的值由系统保留。
>
>应用程序可以定义第二个范围 (WM_USER 0x7FFF) 的消息编号，并使用在专用窗口类中发送消息。 这些值不能用于定义在整个应用程序中有意义的消息，因为某些预定义的窗口类已定义此范围内的值。 例如，预定义控件类（如 **BUTTON**、 **EDIT**、 **LISTBOX** 和 **COMBOBOX** ）可能使用这些值。 不应将此范围内的消息发送到其他应用程序，除非应用程序已设计为交换消息并将相同的含义附加到消息编号。
>
>(0x8000到 0xBFFF) 的第三个范围的消息编号可供应用程序用作私人消息。 此范围内的消息与系统消息不冲突。
>
>应用程序调用 [**RegisterWindowMessage**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerwindowmessagea) 函数以检索字符串的消息编号时，会在运行时定义第四个范围 (0xC000到0xFFFF) 的消息编号。 注册同一字符串的所有应用程序都可以使用关联的消息号来交换消息。 但是，实际消息编号不是常量，不能假定不同会话之间的相同。
>
>第五个范围 (大于 0xFFFF) 的消息编号由系统保留。

### 消息函数 (Windows 和消息)

- [**BroadcastSystemMessage**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-broadcastsystemmessage)
- [**BroadcastSystemMessageEx**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-broadcastsystemmessageexa)
- [**DispatchMessage**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-dispatchmessage)
- [**GetInputState**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getinputstate)
- [**GetMessage**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmessage)
- [**GetMessageExtraInfo**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmessageextrainfo)
- [**GetMessagePos**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmessagepos)
- [**GetMessageTime**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getmessagetime)
- [**GetQueueStatus**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-getqueuestatus)
- [**InSendMessage**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-insendmessage)
- [**InSendMessageEx**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-insendmessageex)
- [**PeekMessage**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-peekmessagea)
- [**PostMessage**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-postmessagea)
- [**PostQuitMessage**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-postquitmessage)
- [**PostThreadMessage**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-postthreadmessagea)
- [**RegisterWindowMessage**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-registerwindowmessagea)
- [**ReplyMessage**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-replymessage)
- [*SendAsyncProc*](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nc-winuser-sendasyncproc)
- [**SendMessage**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-sendmessage)
- [**SendMessageCallback**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-sendmessagecallbacka)
- [**SendMessageTimeout**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-sendmessagetimeouta)
- [**SendNotifyMessage**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-sendnotifymessagea)
- [**SetMessageExtraInfo**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-setmessageextrainfo)
- [**TranslateMessage**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-translatemessage)
- [**WaitMessage**](https://learn.microsoft.com/zh-cn/windows/win32/api/winuser/nf-winuser-waitmessage)

