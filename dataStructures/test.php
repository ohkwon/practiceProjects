<?php
class Parental
{
    public $attr = '';

    public function __construct()
    {
        $this->attr = 'meep';
    }

    public function show() {
        echo $this->attr . PHP_EOL;
    }

    public function testChild()
    {
        $child = new Childal;

        $child->showChild();
    }
}

class Childal extends Parental
{
    public function __construct()
    {
        parent::__construct();
    }

    public function showChild()
    {
        $parentAttr = $this->attr;
        $this->attr = 'moop';
        echo 'parent: ' . $parentAttr . PHP_EOL;
        echo 'child: ' . $this->attr . PHP_EOL;
    }
}

$test = new Parental;

$test->testChild();