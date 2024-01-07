class Config {
  public mysql_host =
    "n2o93bb1bwmn0zle.chr7pe7iynqr.eu-west-1.rds.amazonaws.com";
  public mysql_user = "w9gfgo9pzn4us3y4";
  public mysql_password = "z1m7y0c66rtwgh9k";
  public mysql_port = 3306;
  public mysql_database = "hl6ha5knfenfkrnm";
  public webPort = 4000;
}

//w9gfgo9pzn4us3y4:z1m7y0c66rtwgh9k@n2o93bb1bwmn0zle.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/hl6ha5knfenfkrnm


const config = new Config();
export default config;

//for connecting to my local server

// public mysql_host = "localhost";
//     public mysql_user = "root";
//     public mysql_password = "12345678";
//     public mysql_port = 3306;
//     public mysql_database = "vacation";
//     public webPort = 4000;
