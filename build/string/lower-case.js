'use strict';

var validator = require('validator');
var t = require('tcomb-form');

// Lowercase
var LowerCase = t.refinement(t.String, validator.isLowercase);

LowerCase.getValidationErrorMessage = function (value, path, context) {
  return 'Must be only lower case characters.';
};

module.exports = LowerCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy9sb3dlci1jYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZDLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7OztBQUFDLEFBR2hDLElBQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRWhFLFNBQVMsQ0FBQyx5QkFBeUIsR0FBRyxVQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTztTQUFLLHFDQUFxQztDQUFBLENBQUM7O0FBRXRHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDIiwiZmlsZSI6InN0cmluZy9sb3dlci1jYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFsaWRhdG9yID0gcmVxdWlyZSgndmFsaWRhdG9yJyk7XG5jb25zdCB0ID0gcmVxdWlyZSgndGNvbWItZm9ybScpO1xuXG4vLyBMb3dlcmNhc2VcbmNvbnN0IExvd2VyQ2FzZSA9IHQucmVmaW5lbWVudCh0LlN0cmluZywgdmFsaWRhdG9yLmlzTG93ZXJjYXNlKTtcblxuTG93ZXJDYXNlLmdldFZhbGlkYXRpb25FcnJvck1lc3NhZ2UgPSAodmFsdWUsIHBhdGgsIGNvbnRleHQpID0+ICdNdXN0IGJlIG9ubHkgbG93ZXIgY2FzZSBjaGFyYWN0ZXJzLic7XG5cbm1vZHVsZS5leHBvcnRzID0gTG93ZXJDYXNlO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9