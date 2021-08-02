INSERT INTO department_table (department_name)
VALUES ("IT"),
       ("Sales"),
       ("R&D");

INSERT INTO role_table (role_name, salary, department_id)
VALUES ("IT Manager", 30.50, 1),
       ("Admin", 27.50, 1),
       ("Sales Manager", 28.50, 2),
       ("Salesman", 23.50, 2),
       ("R&D Manager", 32.50, 3),
       ("Researcher", 29.50, 3);

INSERT INTO employee_table (first_name, last_name, manager_id, role_id, department_id)
VALUES ("John", "Smith", 1, 1, 1),
       ("Jane", "Doe", 1, 2, 1),
       ("Mary", "Jane", 3, 3, 2),
       ("Cody", "Wheeler", 3, 4, 2),
       ("Malory", "Sterling", 5, 5, 3),
       ("Archer", "Sterling", 5, 6, 3);