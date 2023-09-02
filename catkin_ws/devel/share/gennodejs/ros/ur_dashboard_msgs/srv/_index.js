
"use strict";

let GetLoadedProgram = require('./GetLoadedProgram.js')
let RawRequest = require('./RawRequest.js')
let Popup = require('./Popup.js')
let GetProgramState = require('./GetProgramState.js')
let IsProgramSaved = require('./IsProgramSaved.js')
let IsInRemoteControl = require('./IsInRemoteControl.js')
let GetSafetyMode = require('./GetSafetyMode.js')
let IsProgramRunning = require('./IsProgramRunning.js')
let AddToLog = require('./AddToLog.js')
let GetRobotMode = require('./GetRobotMode.js')
let Load = require('./Load.js')

module.exports = {
  GetLoadedProgram: GetLoadedProgram,
  RawRequest: RawRequest,
  Popup: Popup,
  GetProgramState: GetProgramState,
  IsProgramSaved: IsProgramSaved,
  IsInRemoteControl: IsInRemoteControl,
  GetSafetyMode: GetSafetyMode,
  IsProgramRunning: IsProgramRunning,
  AddToLog: AddToLog,
  GetRobotMode: GetRobotMode,
  Load: Load,
};
