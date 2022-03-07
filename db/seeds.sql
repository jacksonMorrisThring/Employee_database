-- INSERT INTO favorite_books (book_name)
-- VALUES ("The Great Gatsby"),
--        ("Huckleberry Finn"),
--        ("100 Years of Solitude"),
--        ("Things Fall Apart"),
--        ("Crime and Punishment"),
--        ("Moby Dick"),
--        ("Decameron");

INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");
       
SELECT * FROM department;

INSERT INTO role (title, salary, department_id)
VALUES ("Sales lead", 80000, 1),
       ("Engineer", 80000, 2),
       ("Lead Engineer", 100000, 2),
       ("Lawyer", 150000, 4),
       ("Legal Team Lead", 200000, 4),
       ("Account Manager", 200000, 3),
       ("Accountant", 140000, 3);

SELECT * FROM role;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Chan", 1, NULL),
       ("Asheley", "Rodriguez", 3, NULL),
       ("Kevin", "Tupic", 2, 3),
       ("Kunal", "Singh", 6, NULL),
       ("Malia", "Brown", 7, 6),
       ("Sarah", "Lourd", 5, NULL),
       ("Tom", "Allen", 4, 5);

SELECT * FROM employee;
       