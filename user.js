function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6D6qWrDOMOz":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume = 0.2;
}

