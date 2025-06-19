// Joue une note MIDI simple (Do4, valeur MIDI 60) pendant 1 seconde

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function playNote(output, note = 60, velocity = 100, duration = 1000) {
  // Note ON
  output.send([0x90, note, velocity]);
  await sleep(duration);
  // Note OFF
  output.send([0x80, note, 0]);
}

if (navigator.requestMIDIAccess) {
  navigator.requestMIDIAccess().then(midiAccess => {
    const outputs = Array.from(midiAccess.outputs.values());
    if (outputs.length === 0) {
      console.log("Aucune sortie MIDI détectée.");
      return;
    }
    const output = outputs[0];
    playNote(output);
  }, () => {
    console.log("Accès MIDI refusé.");
  });
} else {
  console.log("Web MIDI API non supportée par ce navigateur.");
}