<?php
    class dbh{
        private $host;
        private $db;
        private $username;
        private $pasword;
        private $charset;

        public function conect()
        {
            $this->host = 'localhost';
            $this->db = 'phpandsql';
            $this->username = 'root';
            $this->pasword = '';
            $this->charset = 'UTF8mb4';
            
            try{
                $dsn = "mysql:host=" . $this->host . ";dbname=" . $this->db . ";charset=" . $this->charset;
                $pdo = new PDO($dsn, $this->username, $this->pasword);
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $pdo;
            }catch(PDOException $e){
                echo $e->getMessage();
            }
        }
    }
