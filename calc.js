var mode = 'deg'; // Default mode is degrees

    function clear12() {
      document.getElementById('display').value = '';
    }

    function display(value) {
      var currentDisplay = document.getElementById('display').value;

      if (value === '.' && currentDisplay.slice(-1) === '.') {
        return;
      }

      document.getElementById('display').value += value;
    }

    function calculate() {
      try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
      } catch (error) {
        document.getElementById('display').value = 'Error';
      }
    }

    function sct(func) {
      var angle = eval(document.getElementById('display').value);

      if (mode === 'deg') {
        angle = angle * (Math.PI / 180);
      }

      document.getElementById('display').value = eval('Math.' + func + '(' + angle + ')');
    }

    function Log() {
      document.getElementById('display').value = Math.log(eval(document.getElementById('display').value));
    }

    function factorial() {
      var num = eval(document.getElementById('display').value);
      var result = 1;

      for (var i = 2; i <= num; i++) {
        result *= i;
      }

      document.getElementById('display').value = result;
    }

    function squareRoot() {
      document.getElementById('display').value = Math.sqrt(eval(document.getElementById('display').value));
    }

    function power() {
      var base = eval(document.getElementById('display').value);
      var exponent = prompt('Enter the exponent:');
      document.getElementById('display').value = Math.pow(base, exponent);
    }

    function exponent() {
      document.getElementById('display').value = Math.exp(eval(document.getElementById('display').value));
    }

    function inverse() {
      document.getElementById('display').value = 1 / eval(document.getElementById('display').value);
    }

    function e() {
      document.getElementById('display').value = Math.E;
    }

    

    function toggleMode() {
      mode = (mode === 'deg') ? 'rad' : 'deg';
      document.getElementById('modeDisplay').innerHTML = mode.toUpperCase();
    }
    
    function degree(radio) {
      var radios = document.getElementsByName(radio.name);
      for (var i = 0; i < radios.length; i++) {
        radios[i].checked = false;
      }
      radio.checked = true;
    }