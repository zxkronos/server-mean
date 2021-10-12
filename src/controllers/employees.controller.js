// const hello = (req, res) => res.send('hello');


const employeesCtrl = {}

const Employee = require('../models/Employee')

employeesCtrl.getEmployees = async (req, res) => {
     const employees = await Employee.find();
     res.json(employees)
}
employeesCtrl.createEmployee = (req, res) => {
    const newEmployee = new Employee(req.body);
    newEmployee.save();
    res.send('Empleado creado');
}
employeesCtrl.getEmployee = async(req, res) => {
    console.log(req.params.id);
    const employee = await Employee.findOne({_id: req.params.id});
    console.log(employee);
    res.send(employee);
}
employeesCtrl.editEmployee = async (req, res) => {
    // const employe_antiguo = await Employee.findById(req.params.id);
    console.log(req.body);
    const employe_nuevo = await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: "empleado Actualizado",  empleado_despues: employe_nuevo});
}
employeesCtrl.deleteEmployee = async(req, res) => {
    const employee= await Employee.findByIdAndDelete(req.params.id)
    res.json({status: "Empleado eliminado",
                employee})
}

module.exports= {employeesCtrl}