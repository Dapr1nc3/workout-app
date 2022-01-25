<<<<<<< HEAD
CREATE TABLE user (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL
);

CREATE TABLE measurements (
    measurements_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    height VARCHAR(50),
    lbs VARCHAR(50),
    chest VARCHAR(50),
    waist VARCHAR(50),
    biceps VARCHAR(50),
    hips VARCHAR(50),
    calfs VARCHAR(50),
    thighs VARCHAR(50)
);
=======
DROP DATABASE IF EXISTS git_fit_db;

CREATE DATABASE git_fit_db;
>>>>>>> 9f7a73cf3d8e318e9d3a720efb27fd79d545ee60
