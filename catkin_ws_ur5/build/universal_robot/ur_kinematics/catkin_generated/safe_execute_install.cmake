execute_process(COMMAND "/home/will/Tutorial_to_UR5e/catkin_ws_ur5/build/universal_robot/ur_kinematics/catkin_generated/python_distutils_install.sh" RESULT_VARIABLE res)

if(NOT res EQUAL 0)
  message(FATAL_ERROR "execute_process(/home/will/Tutorial_to_UR5e/catkin_ws_ur5/build/universal_robot/ur_kinematics/catkin_generated/python_distutils_install.sh) returned error code ")
endif()