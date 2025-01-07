<?php
include "dbh.php";

    class feedback extends dbh{
        private $name;
        private $text_feedbak;

        public function __construct($name, $feed){
            $this->name = $name;
            $this->text_feedbak = $feed;
        }

        public function create(){
            echo  $this->name;
            echo  $this->text_feedbak;

            $sql = "INSERT INTO commentaires (nom, message) values (:name, :message)";
            $pdo = $this->conect();
            
            $stm = $pdo->prepare($sql);

            $stm->bindParam(':name', $this->name);
            $stm->bindParam(':message', $this->text_feedbak);

            $stm->execute();

        }

        public function getAll(){
            $sql = "select * FROM commentaires";
            $pdo = $this->conect();
            
            $stm = $pdo->query($sql);

            while($row = $stm->fetch()){
                echo $row['nom'] ." | ". $row['message'] . "</br>";
            }
        }

    }
