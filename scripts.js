// #region Declare Variables
// #region Declare Variables

const keyCodes = {
  0: 'That key has no keycode',
  3: 'break',
  8: 'backspace / delete',
  9: 'tab',
  12: 'clear',
  13: 'enter',
  16: 'shift',
  17: 'ctrl',
  18: 'alt',
  19: 'pause/break',
  20: 'caps lock',
  21: 'hangul',
  25: 'hanja',
  27: 'escape',
  28: 'conversion',
  29: 'non-conversion',
  32: 'spacebar',
  33: 'page up',
  34: 'page down',
  35: 'end',
  36: 'home',
  37: 'left arrow',
  38: 'up arrow',
  39: 'right arrow',
  40: 'down arrow',
  41: 'select',
  42: 'print',
  43: 'execute',
  44: 'Print Screen',
  45: 'insert',
  46: 'delete',
  47: 'help',
  48: '0',
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  53: '5',
  54: '6',
  55: '7',
  56: '8',
  57: '9',
  58: ':',
  59: 'semicolon (firefox), equals',
  60: '<',
  61: 'equals (firefox)',
  63: 'ß',
  64: '@ (firefox)',
  65: 'a',
  66: 'b',
  67: 'c',
  68: 'd',
  69: 'e',
  70: 'f',
  71: 'g',
  72: 'h',
  73: 'i',
  74: 'j',
  75: 'k',
  76: 'l',
  77: 'm',
  78: 'n',
  79: 'o',
  80: 'p',
  81: 'q',
  82: 'r',
  83: 's',
  84: 't',
  85: 'u',
  86: 'v',
  87: 'w',
  88: 'x',
  89: 'y',
  90: 'z',
  91: 'Windows Key / Left ⌘ / Chromebook Search key',
  92: 'right window key',
  93: 'Windows Menu / Right ⌘',
  95: 'sleep',
  96: 'numpad 0',
  97: 'numpad 1',
  98: 'numpad 2',
  99: 'numpad 3',
  100: 'numpad 4',
  101: 'numpad 5',
  102: 'numpad 6',
  103: 'numpad 7',
  104: 'numpad 8',
  105: 'numpad 9',
  106: 'multiply',
  107: 'add',
  108: 'numpad period (firefox)',
  109: 'subtract',
  110: 'decimal point',
  111: 'divide',
  112: 'f1',
  113: 'f2',
  114: 'f3',
  115: 'f4',
  116: 'f5',
  117: 'f6',
  118: 'f7',
  119: 'f8',
  120: 'f9',
  121: 'f10',
  122: 'f11',
  123: 'f12',
  124: 'f13',
  125: 'f14',
  126: 'f15',
  127: 'f16',
  128: 'f17',
  129: 'f18',
  130: 'f19',
  131: 'f20',
  132: 'f21',
  133: 'f22',
  134: 'f23',
  135: 'f24',
  144: 'num lock',
  145: 'scroll lock',
  151: 'airplane mode',
  160: '^',
  161: '!',
  162: '؛ (arabic semicolon)',
  163: '#',
  164: '$',
  165: 'ù',
  166: 'page backward',
  167: 'page forward',
  168: 'refresh',
  169: 'closing paren (AZERTY)',
  170: '*',
  171: '~ + * key',
  172: 'home key',
  173: 'minus (firefox), mute/unmute',
  174: 'decrease volume level',
  175: 'increase volume level',
  176: 'next',
  177: 'previous',
  178: 'stop',
  179: 'play/pause',
  180: 'e-mail',
  181: 'mute/unmute (firefox)',
  182: 'decrease volume level (firefox)',
  183: 'increase volume level (firefox)',
  186: 'semi-colon / ñ',
  187: 'equal sign',
  188: 'comma',
  189: 'dash',
  190: 'period',
  191: 'forward slash / ç',
  192: 'grave accent / ñ / æ / ö',
  193: '?, / or °',
  194: 'numpad period (chrome)',
  219: 'open bracket',
  220: 'back slash',
  221: 'close bracket / å',
  222: 'single quote / ø / ä',
  223: '`',
  224: 'left or right ⌘ key (firefox)',
  225: 'altgr',
  226: '< /git >, left back slash',
  230: 'GNOME Compose Key',
  231: 'ç',
  233: 'XF86Forward',
  234: 'XF86Back',
  235: 'non-conversion',
  240: 'alphanumeric',
  242: 'hiragana/katakana',
  243: 'half-width/full-width',
  244: 'kanji',
  251: 'unlock trackpad (Chrome/Edge)',
  255: 'toggle touchpad',
};

const keyLocations = {
  0: 'General keys',
  1: 'Left-side modifier keys',
  2: 'Right-side modifier keys',
  3: 'Numpad',
};

const body = document.querySelector('body');
const mobileInputDiv = document.querySelector('.mobile-input');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.textBaseline = 'middle';
ctx.textAlign = 'center';
ctx.font = '110px sans-serif';

// #endregion

// #region Main Methods

function drawNumberToCanvas(number) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.fillText(number, canvas.width / 2, canvas.height / 2, canvas.width);
  const data = canvas.toDataURL('image/png');

  const link = document.querySelector("link[rel*='icon']");
  link.type = 'image/x-icon';
  link.href = data;
}


// #endregion

// #region Event Listeners

document.addEventListener('touchstart', e => {
  if (document.querySelector('.mobile-input input') !== null) return;
  if (e.target.tagName === 'BUTTON') return;

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  mobileInputDiv.appendChild(input);

  // For some reason, the focus is immediately lost unless there is a delay on setting the focus
  setTimeout(() => {
    input.focus();
  }, 100);
});


body.onkeydown = function(e) {

  if (!e.metaKey) {
    e.preventDefault();
  }
  drawNumberToCanvas(e.keyCode);

  // Check if Key_Values is Unidentified then redirect to docs
  var newKeyText = '';
  if (e.key != null && e.key === 'Unidentified') {
    newKeyText = '<a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values#Special_values" target="_blank" rel="noopener">Unidentified</a>';
  } else if (e.key === ' ') {
    // newKeyText = `<span class="text-muted">(Space character)</span>`;
	newKeyText = `<span>Space</span>`;
  } else if (e.which === 17) {
	newKeyText = `<span>Control</span>`;
  } else if (e.which === 174) {
	newKeyText = `<span>Volume-</span>`;
  } else if (e.which === 175) {
	newKeyText = `<span>Volume+</span>`;
  } else if (e.which === 173) {
	newKeyText = `<span>Mute</span>`;
  } else if (e.which === 180) {
	newKeyText = `<span>Mail</span>`;
  } else if (e.which === 183) {
	newKeyText = `<span>Calculator</span>`;
  } else if (e.which === 20) {
	newKeyText = `<span>Caps Lock</span>`;
  } else if (e.which === 93) {
	newKeyText = `<span>Context</span>`;
  } else if (e.which === 145) {
	newKeyText = `<span>Scroll Lock</span>`;
  } else if (e.which === 33) {
	newKeyText = `<span>Page Up</span>`;
  } else if (e.which === 34) {
	newKeyText = `<span>Page Down</span>`;
  } else if (e.which === 144) {
	newKeyText = `<span>Num Lock</span>`;
  } else {
    newKeyText = e.key || '';
  }
	switch(e.which) {
		case 8:
			document.getElementById("backspace.mp3").play();
			break;
		case 9:
			document.getElementById("tab.mp3").play();
			break;
		case 13:
			document.getElementById("enter.mp3").play();
			break;
		case 16:
			document.getElementById("shift.mp3").play();
			break;
		case 17:
			document.getElementById("control.mp3").play();
			break;
		case 18:
			document.getElementById("alt.mp3").play();
			break;
		case 19:
			document.getElementById("pause.mp3").play();
			break;
		case 20:
			document.getElementById("capslock.mp3").play();
			break;
		case 27:
			document.getElementById("escape.mp3").play();
			break;
		case 32:
			document.getElementById("spacebar.mp3").play();
			break;
		case 33:
			document.getElementById("pageup.mp3").play();
			break;
		case 34:
			document.getElementById("pagedown.mp3").play();
			break;
		case 35:
			document.getElementById("end.mp3").play();
			break;
		case 36:
			document.getElementById("home.mp3").play();
			break;
		case 37:
			document.getElementById("leftarrow.mp3").play();
			break;
		case 38:
			document.getElementById("uparrow.mp3").play();
			break;
		case 39:
			document.getElementById("rightarrow.mp3").play();
			break;
		case 40:
			document.getElementById("downarrow.mp3").play();
			break;
		case 45:
			document.getElementById("insert.mp3").play();
			break;
		case 46:
			document.getElementById("delete.mp3").play();
			break;
		case 47:
			document.getElementById("help.mp3").play();
			break;
		case 48:
			if(newKeyText === ")"){
					document.getElementById("rightbracket.mp3"); 
				}
			else{
				document.getElementById("0.mp3");
				}
			x.play();

			break;
		case 49:
			if(newKeyText === "!"){
					document.getElementById("exclamationmark.mp3"); 
				}
			else{
				document.getElementById("1.mp3"); 
				}
			x.play();

			break;
		case 50:
			if(newKeyText == "@"){
					document.getElementById("at.mp3"); 
				}
			else{
				document.getElementById("2.mp3"); 
				}
			x.play();

			break;
		case 51:if(newKeyText === "#"){
					document.getElementById("hash.mp3"); 
				}
			else{
				document.getElementById("3.mp3"); 
				}
			x.play();

			break;
		case 52:
			if(newKeyText === "$"){
					document.getElementById("dollar.mp3"); 
				}
			else{
				document.getElementById("4.mp3"); 
				}
			x.play();

			break;
		case 53:
			if(newKeyText === "%"){
					document.getElementById("percent.mp3"); 
				}
			else{
				document.getElementById("5.mp3"); 
				}
			x.play();

			break;
		case 54:
			if(newKeyText === "^"){
					document.getElementById("circumflex.mp3"); 
				}
			else{
				document.getElementById("6.mp3"); 
				}
			x.play();

			break;
		case 55:
			if(newKeyText === "&"){
					document.getElementById("ampersand.mp3"); 
				}
			else{
				document.getElementById("7.mp3"); 
				}
			x.play();

			break;
		case 56:
			if(newKeyText === "*"){
					document.getElementById("star.mp3"); 
				}
			else{
				document.getElementById("8.mp3"); 
				}
			x.play();

			break;
		case 57:
			if(newKeyText === "("){
					document.getElementById("leftbracket.mp3"); 
				}
			else{
				document.getElementById("9.mp3"); 
				}
			x.play();

			break;
		case 58:
			if(newKeyText === ")"){
					document.getElementById("rightbracket.mp3"); 
				}
			else{
				document.getElementById("0.mp3"); 
				}
			x.play();

			break;
		case 59:
			document.getElementById("semicolon.mp3").play();
			break;
		case 60:
			document.getElementById("lessthan.mp3").play();
			break;
		case 61:
			if(newKeyText === "+"){
					document.getElementById("plus.mp3"); 
				}
			else{
				document.getElementById("equals.mp3"); 
				}
			x.play();

			break;
		case 64:
			document.getElementById("at.mp3").play();
			break;
		case 65:
			document.getElementById("a.mp3").play();
			break;
		case 66:
			document.getElementById("b.mp3").play();
			break;
		case 67:
			document.getElementById("c.mp3").play();
			break;
		case 68:
			document.getElementById("d.mp3").play();
			break;
		case 69:
			document.getElementById("e.mp3").play();
			break;
		case 70:
			document.getElementById("f.mp3").play();
			break;
		case 71:
			document.getElementById("g.mp3").play();
			break;
		case 72:
			document.getElementById("h.mp3").play();
			break;
		case 73:
			document.getElementById("i.mp3").play();
			break;
		case 74:
			document.getElementById("j.mp3").play();
			break;
		case 75:
			document.getElementById("k.mp3").play();
			break;
		case 76:
			document.getElementById("l.mp3").play();
			break;
		case 77:
			document.getElementById("m.mp3").play();
			break;
		case 78:
			document.getElementById("n.mp3").play();
			break;
		case 79:
			document.getElementById("o.mp3").play();
			break;
		case 80:
			document.getElementById("p.mp3").play();
			break;
		case 81:
			document.getElementById("q.mp3").play();
			break;
		case 82:
			document.getElementById("r.mp3").play();
			break;
		case 83:
			document.getElementById("s.mp3").play();
			break;
		case 84:
			document.getElementById("t.mp3").play();
			break;
		case 85:
			document.getElementById("u.mp3").play();
			break;
		case 86:
			document.getElementById("v.mp3").play();
			break;
		case 87:
			document.getElementById("w.mp3").play();
			break;
		case 88:
			document.getElementById("x.mp3").play();
			break;
		case 89:
			document.getElementById("y.mp3").play();
			break;
		case 90:
			document.getElementById("z.mp3").play();
			break;
		case 91:
			document.getElementById("windows.mp3").play();
			break;
		case 93:
			document.getElementById("context.mp3").play();
			break;
		case 96:
			document.getElementById("0.mp3").play();
			break;
		case 97:
			document.getElementById("1.mp3").play();
			break;
		case 98:
			document.getElementById("2.mp3").play();
			break;
		case 99:
			document.getElementById("3.mp3").play();
			break;
		case 100:
			document.getElementById("4.mp3").play();
			break;
		case 101:
			document.getElementById("5.mp3").play();
			break;
		case 102:
			document.getElementById("6.mp3").play();
			break;
		case 103:
			document.getElementById("7.mp3").play();
			break;
		case 104:
			document.getElementById("8.mp3").play();
			break;
		case 105:
			document.getElementById("9.mp3").play();
			break;
		case 106:
			document.getElementById("multiply.mp3").play();
			break;
		case 107:
			if(newKeyText === "+"){
					document.getElementById("plus.mp3"); 
				}
			else{
				document.getElementById("equals.mp3"); 
				}
			x.play();

			break;
		case 108:
			if(newKeyText === ">"){
					document.getElementById("greaterthan.mp3"); 
				}
			else{
				document.getElementById("fullstop.mp3"); 
				}
			x.play();

			break;
		case 109:
			document.getElementById("minus.mp3").play();
			break;
		case 110:
			document.getElementById("decimalpoint.mp3").play();
			break;
		case 111:
			document.getElementById("divide.mp3").play();
			break;
		case 112:
			document.getElementById("f1.mp3").play();
			break;
		case 113:
			document.getElementById("f2.mp3").play();
			break;
		case 114:
			document.getElementById("f3.mp3").play();
			break;
		case 115:
			document.getElementById("f4.mp3").play();
			break;
		case 116:
			document.getElementById("f5.mp3").play();
			break;
		case 117:
			document.getElementById("f6.mp3").play();
			break;
		case 118:
			document.getElementById("f7.mp3").play();
			break;
		case 119:
			document.getElementById("f8.mp3").play();
			break;
		case 120:
			document.getElementById("f9.mp3").play();
			break;
		case 121:
			document.getElementById("f10.mp3").play();
			break;
		case 122:
			document.getElementById("f11.mp3").play();
			break;
		case 123:
			document.getElementById("f12.mp3").play();
			break;
		case 144:
			document.getElementById("numlock.mp3").play();
			break;
		case 145:
			document.getElementById("scrolllock.mp3").play();
			break;
		case 160:
			document.getElementById("circumflex.mp3").play();
			break;
		case 161:
			document.getElementById("exclamationmark.mp3").play();
			break;
		case 162:
			document.getElementById("colon.mp3").play();
			break;
		case 163:
			document.getElementById("hash.mp3").play();
			break;
		case 164:
			document.getElementById("dollarsign.mp3").play();
			break;
		case 170:
			document.getElementById("star.mp3").play();
			break;
		case 172:
			document.getElementById("home.mp3").play();
			break;
		case 182:
			document.getElementById("volumedown.mp3").play();
			break;
		case 183:
			document.getElementById("volumeup.mp3").play();
			break;
		case 186:
			if(newKeyText === ":"){
					document.getElementById("colon.mp3"); 
				}
			else{
				document.getElementById("semicolon.mp3"); 
				}
			x.play();

			break;
		case 187:
			if(newKeyText === "+"){
					document.getElementById("plus.mp3"); 
				}
			else{
				document.getElementById("equals.mp3"); 
				}
			x.play();

			break;
		case 188:
			if(newKeyText === "<"){
					document.getElementById("lessthan.mp3"); 
				}
			else{
				document.getElementById("comma.mp3"); 
				}
			x.play();

			break;
		case 189:
			if(newKeyText === "_"){
					document.getElementById("underscore.mp3"); 
				}
			else{
				document.getElementById("dash.mp3"); 
				}
			x.play();

			break;
		case 190:
			if(newKeyText === ">"){
					document.getElementById("greaterthan.mp3"); 
				}
			else{
				document.getElementById("fullstop.mp3"); 
				}
			x.play();

			break;
		case 191:
			if(newKeyText === "?"){
					document.getElementById("questionmark.mp3"); 
				}
			else{
				document.getElementById("forwardslash.mp3"); 
				}
			x.play();

			break;
		case 192:
			if(newKeyText === "~"){
					document.getElementById("tild.mp3"); 
				}
			else{
				document.getElementById("grave.mp3"); 
				}
			x.play();

			break;
		case 194:
			document.getElementById("fullstop.mp3").play();
			break;
		case 219:
	if(newKeyText === "{"){
					document.getElementById("leftcurlybracket.mp3"); 
				}
			else{
				document.getElementById("leftsquarebracket.mp3"); 
				}
			x.play();

			break;
		case 220:
			if(newKeyText === "|"){
					document.getElementById("pipe.mp3"); 
				}
			else{
				document.getElementById("backslash.mp3"); 
				}
			x.play();

			break;
		case 221:
if(newKeyText === "}"){
					document.getElementById("rightcurlybracket.mp3"); 
				}
			else{
				document.getElementById("rightsquarebracket.mp3"); 
				}
			x.play();

			break;
		case 222:
			if(newKeyText === "\""){
					document.getElementById("quote.mp3"); 
				}
			else{
				document.getElementById("apostrophe.mp3"); 
				}
			x.play();

			break;
		case 223:
			document.getElementById("grave.mp3").play();
			break;
		case 225:
			document.getElementById("alt.mp3").play();
			break;
		case 226:
			document.getElementById("backslash.mp3").play();
			break;
	}
	
  // Clear input if manually entered
  const mobileInput = document.querySelector('.mobile-input input');
  if (mobileInput !== null) {
    mobileInput.value = '';
  }
    // Moved Main e.keyCode display
  document.querySelector('.keycode-display').innerHTML = newKeyText;



};


// #endregion

// #region Init Methods

drawNumberToCanvas('⌨️');

// #endregion
