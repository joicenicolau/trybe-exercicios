#!/bin/bash

delay=2

# Exercício 1

echo -e "Criando diretorio unix_tests"
mkdir unix_tests
echo -e "Navegando para diretorio unix_tests"
cd unix_tests
sleep $delay

# Exercício 2

echo -e "Criando arquivo trybe.txt"
touch trybe.txt
sleep $delay

# Exercício 3

echo -e "Criando uma copia de trybe.txt com o nome de trybe_backup.txt"
cp trybe.txt trybe_backup.txt
sleep $delay

# Exercício 4

echo -e "Renomeie o arquivo trybe.txt"
mv trybe.txt trybe2.txt
sleep $delay

# Exercício 5

echo -e "Dentro de unix_tests, crie um novo diretório chamado backup"
mkdir backup
sleep $delay

# Exercício 6

echo -e "Mova o arquivo trybe_backup.txt para o diretório backup"
mv trybe_backup.txt backup
sleep $delay

# Exercício 7

echo -e "Dentro de unix_tests, crie um novo diretório chamado backup2"
mkdir backup2
sleep $delay

# Exercício 8

echo -e "Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2"
mv backup/trybe_backup.txt backup2
sleep $delay

# Exercício 9

echo -e "Apagando o diretorio backup"
rmdir backup
sleep $delay

# Exercício 10

echo -e "Renomeando a pasta backup2 para backup"
mv backup2 backup
sleep $delay

# Exercício 11

echo -e "Mostrando o path atual e liste todos os arquivos dentro dele"
pwd
ls -l .
sleep $delay

# Exercício 12

echo -e "Apague o diretório backup"
rm -rd backup
sleep $delay

# Exercício 13

echo -e "Limpe o terminal"
clear
sleep $delay

# Exercício 14

echo -e "\nCriando arquivo skills.txt"
echo -e "Internet\nUnix\nBash\nHTML\nCSS\nJavascript\nReact\nSQL" >> skills.txt
sleep $delay

# Exercício 15

echo -e "Mostrando as 5 primeiras skills do arquivo skills.txt"
head -n 5 skills.txt
sleep $delay

# Exercício 16

echo -e "Mostrando as 4 ultimas skills do arquivo skills.txt"
tail -n 4 skills.txt
sleep $delay

# Exercício 17

echo -e "Apagando todos os arquivos que terminem em .txt"
rm -rf *.txt
sleep $delay


