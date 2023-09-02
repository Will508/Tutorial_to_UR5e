#机械臂使用注意事项（e-learning教程总结）
1.通过控制箱中的数字输入输出信号连接传感器和控制器来实现和其他设备的联动
2.在末端安装夹爪时通过线缆连接后，需要对工具中心点、重心和有效负荷进行设置，可在TCP和重心界面进行引导设置，注意不要接触法兰和夹爪，通过末端关节移动防止测量不准确。
3.创建程序过程中，通过移动和路点进行移动，路点移动包括三种方法，moveJ(关节移动，路径无限制且移动最快)、moveL(直线移动)和moveP(工艺运动，移动速度恒定)
4.通过设置命令实现对数字信号的处理，等待命令实现机械臂在未接收到信号前的等待功能，
5.在I/O界面进行夹爪的开启与关闭以及对其他数字信号的接收
6.在夹爪抓取物体后需要在程序中添加设置有效载荷命令，实现对不同情况下机械臂末端重心的切换，在放下物体后也需要使用有效负载命令变更为空夹爪重心
7.（高级模块）通过线程来控制通过数字信号控制的其他设备（输送机等），根据输入数字信号的变化来控制输出数字信号的变化。也可以通过脚本函数来实现机械臂和其他设备的同步
8.（高级模块）通过赋值来对机械臂的操作进行变量赋值（比如移动到A点时设置A=True），然后通过true or false作为输入信号来控制其他设备，在机器人程序中进行变量初始值的设置，防止在运行过程中因为未设置初始值出现问题
9.通过安全扫描仪来防止工作人员受伤，有专用的安全扫描仪器，连接到可配置输入端后，通过安全的I/O界面进行设置（缩减模式：在扫描到人员时机械臂进行减速），也有专用的安全接口实现在扫描到人员时机械臂完全停止
10.重置按钮（通过config输入端）也可以实现在防护进行重置，按下即可恢复程序，使机械臂继续运动
11.紧急停止按钮（通过红纽盖住的输入端）按下后只能重新开始运行程序，无法像RESET一样继续运行程序
12.安全边界设置：特征界面下选择点进行平面创建，再在安全界面下的平面菜单选择添加平面（用点构建的平面），通过限制实现对平面的限制（正常：正常模式无法通过，缩减模式：缩减模式下无法通过，触发器缩减模式：在超出边界下以缩减模式运行，二者都是：全都不能通过最常用），可以用工具球防止工件通过安全边界
13.在运动过程中增加交融半径并在安全部位增加速度和加速度来提高运行速度，提高工作效率，但同时也要考虑运动的安全性和稳定性，防止出现安全风险

#UR5e在ubuntu20下的环境配置
