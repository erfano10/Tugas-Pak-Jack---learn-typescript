/**
 * A company wants to create an employee salary management system.
 * Each employee has:
 * - Employee ID
 * - Name
 * - Position
 * - Basic salary
 * - Performance bonus
 * 
 * for example:
 * | Property     | Value            |
 * | ------------ | ---------------- |
 * | Employee ID  | EMP001           |
 * | Name         | Kevin De Bruyne  |
 * | Position     | Senior Developer |
 * | Basic Salary | Rp12,000,000     |
 * | Bonus        | Rp2,000,000      |
 * 
 * The company does not want employees or other parts of the application to directly modify their salary.
 * Student Tasks
 * - Create class Employee
 * - Use private properties for sensitive data such as:
 *   * private basicSalary: number;
 *   * private bonus: number;
 * - Create methods:
 *   * getBasicSalary()
 *   * setBasicSalary()
 *   * addBonus()
 *   * getTotalSalary()
 *   * showProfile()
 * - Business Rules
 *   * setBasicSalary():
 *     - Salary cannot be negative.
 *     - Salary must be greater than 0.
 *   * addBonus():
 *     - Bonus cannot be negative.
 *   * getTotalSalary():
 *     - basicSalary + bonus
 * - Implement class with object
 */


class Employee {

    constructor(
        public EmployeID: string,
        public name: string,
        public position: string,
        private basicSalary: number = 0,
        private bonus: number = 0
    ) { }

    public getBasicSalary(): number {
        return this.basicSalary
    }

    public setBasicSalary(newSalary : number): void{
        if (newSalary <= 0 ) {
            console.log(`Gaji pokok harus lebih dari 0`)
        }else{
            this.basicSalary = newSalary 
            console.log(`Gaji pokok berhasil diperbarui menjadi ${this.basicSalary}`)
        }
    }

    public addBonus(amount : number) : void {
        if (amount < 0) {
            console.log(`Bonus tidak boleh bernilai negatif`)
        }else {
            this.bonus += amount
            console.log(`Bonus sebesar : Rp. ${amount}`)
        }
    } 
    public getTotalSalary() : number {
        return this.basicSalary + this.bonus
    } 

    public showProfile (): void {
        console.log(this.EmployeID)
        console.log(this.name)
        console.log(this.position)
        console.log(this.basicSalary)
        console.log(this.bonus)
       
        
    }
}

const employee = new Employee(
    "EMP001",
    "Kevin De Bruyne",
    "Senior Developer",
    12000000
);

employee.addBonus(2000000);
employee.showProfile()

console.log(employee.getTotalSalary());