<?php

use PHPUnit\Framework\TestCase;

// On charge le fichier de la calculatrice
require_once __DIR__ . '/../calculator.php';

class CalculatorTest extends TestCase
{

    // 1. Test de l'addition
    public function testAddition()
    {
        $calc = new Calculator();
        $this->assertEquals(5, $calc->calculate("3+2"));
    }

    // 2. Test de la soustraction
    public function testSoustraction()
    {
        $calc = new Calculator();
        $this->assertEquals(1, $calc->calculate("3-2"));
    }

    // 3. Test de la multiplication
    public function testMultiplication()
    {
        $calc = new Calculator();
        $this->assertEquals(6, $calc->calculate("3*2"));
    }

    // 4. Test de la division
    public function testDivision()
    {
        $calc = new Calculator();
        $this->assertEquals(3, $calc->calculate("6/2"));
    }

    // 5. Test de la division par zéro
    public function testDivisionParZero()
    {
        $calc = new Calculator();
        // On dit à PHPUnit : "Je m'attends à ce que la ligne suivante fasse une erreur"
        $this->expectException(RuntimeException::class);
        $calc->calculate("3/0");
    }

    // BONUS : Test de la chaîne vide
    public function testChaineVide()
    {
        $calc = new Calculator();
        $this->assertEquals(null, $calc->calculate(""));
    }
}
