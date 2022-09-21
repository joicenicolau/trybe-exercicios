#!/bin/zsh

# Exercício 1

mkdir unix_tests_skills
cd unix_tests_skills

# Exercício 2

touch skills2.txt
echo "Internet" >> skills2.txt
echo "Unix" >> skills2.txt
echo "Bash" >> skills2.txt

# Exercício 3

echo "HTML" >> skills2.txt
echo "CSS" >> skills2.txt
echo "JavaScript" >> skills2.txt
echo "React" >> skills2.txt
echo "SQL" >> skills2.txt
sort < skills2.txt

# Exercício 4

cat skills2.txt | wc -l

# Exercício 5

sort < skills2.txt | head -n 3 > top_skills.txt

# Exercício 6

touch phrases2.txt
echo "Pode se encontrar a felicidade mesmo nas horas mais sombrias, se a pessoa se lembrar de acender a luz.Harry Potter , Harry Potter e o Prisioneiro de Azkaban" > phrases2.txt
echo "Não vale a pena mergulhar nos sonhos e esquecer de viver.Harry Potter" >> phrases2.txt

# Exercício 7

grep br phrases2.txt | wc -l

# Exercício 8

grep -v br phrases2.txt | wc -l

# Exerício 9

echo "Brazil" >> phrases2.txt
echo "Itália" >> phrases2.txt

# Exercício 10

cp countries.txt bunch_of_things.txt
cat phrases2.txt >> bunch_of_things.txt

# Exercício 11

sort bunch_of_things.txt -o bunch_of_things.txt

