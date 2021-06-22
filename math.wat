(module ;; begin van wat file / begin van module
(func (export "sum")
      (param $int1 i32) ;;32 bit interger
      (param $int2 i32)
      (result i32)
    local.get $int1
    local.get $int2
    i32.add
    return)

(func   (export "mul") 
        (param $int1 i32) 
        (param $int2 i32) 
        (result i32) 
    local.get $int1
    local.get $int2
    i32.mul
    return)

(func   (export "sub")
        (param $int1 i32) 
        (param $int2 i32)
        (result i32) 
    local.get $int1
    local.get $int2
    i32.sub
    return)

(func   (export "div") 
        (param $int1 i32)
        (param $int2 i32)
        (result i32)
    local.get $int1
    local.get $int2
    i32.div_s
    return)
    )