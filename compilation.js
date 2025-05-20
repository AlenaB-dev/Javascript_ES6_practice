// /* COMPILATION PHASE
// Scopes:
// Global {
// Line 2: TDZ. const b - declared
// Line 4: sum { TDZ. Declared but uninitialized}
// Line 16: var a; decleared and initialized with "undefined"
// Line 18: function mult {All at this stage - declaration, initialization and assigment}
// }

// Function scope {
// Line 4-6: const sum - nothing happens
// Line 9. let multResult - declared, TDZ
// Line 12. let sumResult - declared, TDZ
// Line 18: in mult function var a, var b - declared, initialized with undefined
// }
