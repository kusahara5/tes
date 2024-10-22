function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5k0JqAVE1nM":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgsongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

