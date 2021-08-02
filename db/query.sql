SELECT 
  role_table.id AS role_id, 
  role_table.role_name AS role_name, 
  role_table.salary AS salary, 
  department_table.department_name AS department_name 
    FROM role_table 
    JOIN department_table 
        ON role_table.department_id = department_table.id;

SELECT
  employee_table_1.id AS employee_id,
  employee_table_1.first_name AS first_name,
  employee_table_1.last_name AS last_name,
  role_table.role_name AS role_name,
  role_table.salary AS salary,
  department_table.department_name AS department_name,
  employee_table.first_name AS manager_first_name,
  employee_table.last_name AS manager_last_name
    FROM employee_table AS employee_table_1
    JOIN role_table ON employee_table_1.role_id = role_table.id
    JOIN department_table ON employee_table_1.department_id = department_table.id
    LEFT OUTER JOIN employee_table ON employee_table_1.manager_id = employee_table.id;