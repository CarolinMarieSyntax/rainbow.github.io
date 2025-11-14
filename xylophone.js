const xylophoneColors = [
    '#FFB3B3', // Pastel Red
    '#FFD4B3', // Pastel Orange
    '#FFFFB3', // Pastel Yellow
    '#B3FFB3', // Pastel Green
    '#B3D4FF', // Pastel Blue
    '#D4B3FF', // Pastel Indigo
    '#FFB3FF', // Pastel Violet
    '#FFB3D4', // Pastel Pink
    '#B3FFF5'  // Pastel Aqua
];

const xylophoneFrequencies = [
    261.63, // C4
    293.66, // D4
    329.63, // E4
    349.23, // F4
    392.0,  // G4
    440.0,  // A4
    493.88  // B4
];

const numberNotes = [
    'C4',
    'D4',
    'E4',
    'F4',
    'G4',
    'A4',
    'B4'
];

const letterKeys = ['q', 'w', 'e', 'r', 't', 'z', 'u'];
const letterFrequencies = [
    130.81, // C3
    146.83, // D3
    164.81, // E3
    174.61, // F3
    196.0,  // G3
    220.0,  // A3
    246.94  // B3
];

const letterNotes = [
    'C3',
    'D3',
    'E3',
    'F3',
    'G3',
    'A3',
    'B3'
];

const numberKeys = ['1', '2', '3', '4', '5', '6', '7'];

const middleKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
const middleFrequencies = [
    65.41,  // C2
    73.42,  // D2
    82.41,  // E2
    87.31,  // F2
    98.0,   // G2
    110.0,  // A2
    123.47  // B2
];

const middleNotes = [
    'C2',
    'D2',
    'E2',
    'F2',
    'G2',
    'A2',
    'B2'
];

const drumKeys = ['o', 'l', 'p', 'ö', 'ü', 'ä', '9', '0', 'ß'];
const drumFrequencies = [
    78,   // o - Floor Tom (swapped from l)
    60,   // l - Kick (swapped from o)
    115,  // p - Snare (swapped from ö)
    96,   // ö - Rack Tom (swapped from p)
    145,  // ü - Hat (swapped from ä)
    130,  // ä - Clap (swapped from ü)
    165,  // 9 - Crash
    190,  // 0 - Ride
    210   // ß - Perc
];

const drumNotes = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
];

const keyGroups = {
    numbers: {
        keys: numberKeys,
        frequencies: xylophoneFrequencies,
        notes: numberNotes
    },
    letters: {
        keys: letterKeys,
        frequencies: letterFrequencies,
        notes: letterNotes
    },
    middle: {
        keys: middleKeys,
        frequencies: middleFrequencies,
        notes: middleNotes
    },
    drums: {
        keys: drumKeys,
        frequencies: drumFrequencies,
        notes: drumNotes
    }
};

const drumOverride = {
    oscillatorType: 'sine',
    harmonicsType: 'sine',
    harmonicMultiplier: 0.5,
    harmonicDetune: 0,
    harmonicDetuneEnd: 0,
    harmonicStartRatio: 1.0,
    harmonicSettleTime: 0.05,
    initialPitchRatio: 1.0,
    pitchSettleTime: 0.05,
    pitchDriftCents: 0,
    vibratoFrequency: 0,
    vibratoDepthRatio: 0,
    vibratoDepthEndRatio: 0,
    noiseLevel: 1.2,
    noiseDecay: 0.15,
    distortionAmount: 200,
    toneFrequencyMultiplier: 0.8,
    toneFrequencyEndMultiplier: 0.6,
    toneQ: 2.0,
    cabinetHighLoss: -2,
    resonanceFrequencyMultiplier: 0.9,
    resonanceQ: 12,
    resonanceGain: 0.15,
    dryGain: 0.3,
    reverbMix: 0.12,
    tremoloFrequency: 0,
    tremoloDepth: 0,
    tremoloDecay: 0,
    chorusDepth: 0,
    chorusDepthEnd: 0,
    chorusMix: 0,
    masterGain: 0.7,
    preampGain: 0.75,
    envelope: { attack: 0.001, peak: 1.2, decay: 0.08, sustain: 0.1, release: 0.002 },
    durations: { drums: 0.3 }
};

const soundProfiles = [
    {
        name: 'Electric Guitar',
        oscillatorType: 'sawtooth',
        harmonicsType: 'triangle',
        harmonicMultiplier: 2,
        harmonicDetune: 8,
        harmonicDetuneEnd: -6,
        harmonicStartRatio: 1.02,
        harmonicSettleTime: 0.08,
        initialPitchRatio: 1.02,
        pitchSettleTime: 0.08,
        pitchDriftCents: 6,
        vibratoFrequency: 5.8,
        vibratoDepthRatio: 0.011,
        vibratoDepthEndRatio: 0.004,
        noiseLevel: 0.65,
        noiseDecay: 0.07,
        distortionAmount: 260,
        toneFrequencyMultiplier: 2.4,
        toneQ: 1.2,
        toneFrequencyEndMultiplier: 1.2,
        cabinetHighLoss: -6,
        resonanceFrequencyMultiplier: 1.8,
        resonanceQ: 20,
        resonanceGain: 0.38,
        dryGain: 0.3,
        reverbMix: 0.4,
        tremoloFrequency: 7.2,
        tremoloDepth: 0.28,
        tremoloDecay: 0.1,
        chorusDelayTime: 0.016,
        chorusDepth: 0.0045,
        chorusDepthEnd: 0.0025,
        chorusRate: 0.9,
        chorusMix: 0.32,
        masterGain: 0.7,
        preampGain: 0.75,
        durations: { numbers: 0.45, letters: 0.6, middle: 0.65, drums: 0.38 },
        envelope: { attack: 0.006, peak: 0.85, decay: 0.08, sustain: 0.55, release: 0.0015 },
        groupOverrides: { drums: drumOverride }
    },
    {
        name: 'Ambient Pad',
        oscillatorType: 'triangle',
        harmonicsType: 'sine',
        harmonicMultiplier: 1,
        harmonicStartRatio: 1,
        harmonicSettleTime: 0.2,
        initialPitchRatio: 1,
        pitchSettleTime: 0.18,
        harmonicDetune: 2,
        harmonicDetuneEnd: 0,
        pitchDriftCents: 2,
        vibratoFrequency: 3.5,
        vibratoDepthRatio: 0.008,
        vibratoDepthEndRatio: 0.006,
        noiseLevel: 0.2,
        noiseDecay: 0.3,
        distortionAmount: 110,
        toneFrequencyMultiplier: 1.8,
        toneQ: 0.8,
        toneFrequencyEndMultiplier: 1.05,
        cabinetHighLoss: -4,
        resonanceFrequencyMultiplier: 1.4,
        resonanceQ: 9,
        resonanceGain: 0.24,
        dryGain: 0.3,
        reverbMix: 0.65,
        tremoloFrequency: 4.2,
        tremoloDepth: 0.12,
        tremoloDecay: 0.05,
        chorusDelayTime: 0.018,
        chorusDepth: 0.008,
        chorusDepthEnd: 0.006,
        chorusRate: 0.55,
        chorusMix: 0.5,
        masterGain: 0.7,
        preampGain: 0.75,
        durations: { numbers: 0.9, letters: 1.1, middle: 1.2, drums: 0.45 },
        envelope: { attack: 0.18, peak: 0.95, decay: 0.4, sustain: 0.8, release: 0.002 },
        groupOverrides: { drums: drumOverride }
    },
    {
        name: 'Retro Synth',
        oscillatorType: 'sawtooth',
        harmonicsType: 'square',
        harmonicMultiplier: 2,
        harmonicDetune: 5,
        harmonicDetuneEnd: -3,
        harmonicStartRatio: 1.01,
        harmonicSettleTime: 0.12,
        initialPitchRatio: 1.01,
        pitchSettleTime: 0.09,
        pitchDriftCents: 4,
        vibratoFrequency: 6.3,
        vibratoDepthRatio: 0.007,
        vibratoDepthEndRatio: 0.0035,
        noiseLevel: 0.35,
        noiseDecay: 0.08,
        distortionAmount: 220,
        toneFrequencyMultiplier: 2.1,
        toneQ: 1.5,
        toneFrequencyEndMultiplier: 1.25,
        cabinetHighLoss: -5,
        resonanceFrequencyMultiplier: 1.6,
        resonanceQ: 16,
        resonanceGain: 0.32,
        dryGain: 0.3,
        reverbMix: 0.3,
        tremoloFrequency: 8.5,
        tremoloDepth: 0.18,
        tremoloDecay: 0.15,
        chorusDelayTime: 0.014,
        chorusDepth: 0.0035,
        chorusDepthEnd: 0.0022,
        chorusRate: 1.6,
        chorusMix: 0.28,
        masterGain: 0.7,
        preampGain: 0.75,
        durations: { numbers: 0.5, letters: 0.65, middle: 0.7, drums: 0.4 },
        envelope: { attack: 0.01, peak: 0.88, decay: 0.1, sustain: 0.5, release: 0.0018 },
        groupOverrides: { drums: drumOverride }
    },
    {
        name: 'Chiptune Pulse',
        oscillatorType: 'square',
        harmonicsType: 'square',
        harmonicMultiplier: 1,
        harmonicStartRatio: 1,
        harmonicSettleTime: 0.02,
        initialPitchRatio: 1,
        pitchSettleTime: 0.04,
        harmonicDetune: 0,
        harmonicDetuneEnd: 0,
        pitchDriftCents: 1,
        vibratoFrequency: 8.5,
        vibratoDepthRatio: 0.004,
        vibratoDepthEndRatio: 0.003,
        noiseLevel: 0,
        noiseDecay: 0.05,
        distortionAmount: 140,
        toneFrequencyMultiplier: 1.6,
        toneQ: 0.9,
        toneFrequencyEndMultiplier: 1.15,
        cabinetHighLoss: -3,
        resonanceFrequencyMultiplier: 1.3,
        resonanceQ: 10,
        resonanceGain: 0.22,
        dryGain: 0.3,
        reverbMix: 0.08,
        tremoloFrequency: 12,
        tremoloDepth: 0.16,
        tremoloDecay: 0.12,
        chorusDepth: 0,
        chorusDepthEnd: 0,
        chorusRate: 1.2,
        chorusMix: 0,
        masterGain: 0.7,
        preampGain: 0.75,
        durations: { numbers: 0.35, letters: 0.4, middle: 0.45, drums: 0.32 },
        envelope: { attack: 0.004, peak: 0.9, decay: 0.05, sustain: 0.4, release: 0.0015 },
        groupOverrides: { drums: drumOverride }
    },
    {
        name: 'Hollow Organ',
        oscillatorType: 'sine',
        harmonicsType: 'triangle',
        harmonicMultiplier: 2,
        harmonicDetune: 6,
        harmonicDetuneEnd: -2,
        harmonicStartRatio: 1.01,
        harmonicSettleTime: 0.12,
        initialPitchRatio: 1,
        pitchSettleTime: 0.1,
        pitchDriftCents: 0,
        vibratoFrequency: 5,
        vibratoDepthRatio: 0.006,
        vibratoDepthEndRatio: 0.003,
        noiseLevel: 0.1,
        noiseDecay: 0.12,
        distortionAmount: 120,
        toneFrequencyMultiplier: 2.2,
        toneQ: 1.1,
        toneFrequencyEndMultiplier: 1.18,
        cabinetHighLoss: -2,
        resonanceFrequencyMultiplier: 1.5,
        resonanceQ: 12,
        resonanceGain: 0.3,
        dryGain: 0.3,
        reverbMix: 0.5,
        tremoloFrequency: 5.8,
        tremoloDepth: 0.22,
        tremoloDecay: 0.08,
        chorusDelayTime: 0.017,
        chorusDepth: 0.006,
        chorusDepthEnd: 0.004,
        chorusRate: 0.75,
        chorusMix: 0.42,
        masterGain: 0.7,
        preampGain: 0.75,
        durations: { numbers: 0.6, letters: 0.75, middle: 0.9, drums: 0.42 },
        envelope: { attack: 0.02, peak: 0.85, decay: 0.12, sustain: 0.65, release: 0.0018 },
        groupOverrides: { drums: drumOverride }
    }
];

const defaultEnvelope = { attack: 0.006, peak: 0.85, decay: 0.08, sustain: 0.55, release: 0.0015 };
const defaultDurations = { numbers: 0.45, letters: 0.65, middle: 0.7, drums: 0.35 };

let currentProfileIndex = 0;
let currentProfile = soundProfiles[currentProfileIndex];

const KEY_BASE_COLOR = '#f0f0f0';

function createDistortionCurve(amount = 320) {
    const samples = 44100;
    const curve = new Float32Array(samples);
    const deg = Math.PI / 180;

    for (let i = 0; i < samples; i += 1) {
        const x = (i * 2) / samples - 1;
        curve[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x));
    }

    return curve;
}

let audioContext;
let reverbBuffer;
let noiseBuffer;

function generateReverbImpulse(context, seconds = 2.8, decay = 3.4, reverse = false) {
    const sampleRate = context.sampleRate;
    const length = sampleRate * seconds;
    const impulse = context.createBuffer(2, length, sampleRate);
    for (let channel = 0; channel < impulse.numberOfChannels; channel += 1) {
        const impulseData = impulse.getChannelData(channel);
        for (let i = 0; i < length; i += 1) {
            const n = reverse ? length - i : i;
            impulseData[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
        }
    }
    return impulse;
}

function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function initializeKeyAttributes() {
    Object.entries(keyGroups).forEach(([groupName, group]) => {
        group.keys.forEach((keyValue, index) => {
            const keyElement = document.querySelector(`.xylophone-key[data-group="${groupName}"][data-key="${keyValue}"]`);
            if (keyElement && group.notes) {
                const noteName = group.notes[index];
                if (noteName && keyElement.getAttribute('data-note') !== noteName) {
                    keyElement.setAttribute('data-note', noteName);
                }
            }
        });
    });
}

function getToneDurationForGroup(profile, groupName) {
    const durations = (profile && profile.durations) || {};
    return durations[groupName] ?? defaultDurations[groupName] ?? 0.5;
}

function updateProfileUI() {
    const button = document.getElementById('sound-toggle');
    if (button) {
        button.textContent = `Sound: ${currentProfile.name}`;
        button.setAttribute('aria-label', `Aktives Klangprofil: ${currentProfile.name}`);
    }
}

function cycleSoundProfile(step = 1) {
    const total = soundProfiles.length;
    currentProfileIndex = (currentProfileIndex + step + total) % total;
    currentProfile = soundProfiles[currentProfileIndex];
    updateProfileUI();
}

function initializeSoundControls() {
    const button = document.getElementById('sound-toggle');
    if (button) {
        button.addEventListener('click', () => {
            cycleSoundProfile(1);
        });
    }
    updateProfileUI();
}

function initializeApp() {
    initializeKeyAttributes();
    initializeSoundControls();
}

function getProfileForGroup(baseProfile, groupName) {
    const overrides = baseProfile.groupOverrides && baseProfile.groupOverrides[groupName];
    if (!overrides) {
        return baseProfile;
    }
    return {
        ...baseProfile,
        ...overrides,
        durations: { ...(baseProfile.durations || {}), ...(overrides.durations || {}) },
        envelope: { ...(baseProfile.envelope || {}), ...(overrides.envelope || {}) },
        groupOverrides: baseProfile.groupOverrides
    };
}

function getNoiseBuffer(context) {
    if (noiseBuffer) {
        return noiseBuffer;
    }
    const length = Math.floor(context.sampleRate * 0.18);
    const buffer = context.createBuffer(1, length, context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i += 1) {
        const envelope = Math.pow(1 - i / length, 3.2);
        data[i] = (Math.random() * 2 - 1) * envelope;
    }
    noiseBuffer = buffer;
    return noiseBuffer;
}

// Frequency-based loudness compensation (Fletcher-Munson curves)
// Lower frequencies need more gain to sound equally loud
function getFrequencyCompensation(frequency) {
    // Reference frequency where human hearing is quite sensitive (~600 Hz)
    const referenceFreq = 600;
    
    // Use logarithmic scale for smoother compensation curve
    // Lower frequencies get progressively more boost
    if (frequency < referenceFreq) {
        // Logarithmic boost for lower frequencies
        // At 65 Hz (C2): ~1.6x boost
        // At 110 Hz (A2): ~1.5x boost  
        // At 220 Hz (A3): ~1.3x boost
        // At 440 Hz (A4): ~1.1x boost
        const logRatio = Math.log2(frequency / referenceFreq);
        return 1.0 - logRatio * 0.25;
    } else {
        // Slight reduction for very high frequencies
        // At 600+ Hz, neutral to slight reduction
        const logRatio = Math.log2(frequency / referenceFreq);
        return 1.0 - logRatio * 0.1;
    }
}

function playTone(frequency, duration = 0.5, profile = currentProfile) {
    if (!audioContext) {
        return;
    }

    const now = audioContext.currentTime;
    const envelopeSettings = { ...defaultEnvelope, ...(profile.envelope || {}) };
    
    // Calculate frequency compensation
    const freqCompensation = getFrequencyCompensation(frequency);

    const oscillator = audioContext.createOscillator();
    const harmonicsOsc = audioContext.createOscillator();
    const vibratoOsc = audioContext.createOscillator();
    const vibratoGain = audioContext.createGain();
    const preampGain = audioContext.createGain();
    const envelopeGain = audioContext.createGain();
    const toneFilter = audioContext.createBiquadFilter();
    const cabFilter = audioContext.createBiquadFilter();
    const distortion = audioContext.createWaveShaper();
    const dryGain = audioContext.createGain();
    const resonanceFilter = audioContext.createBiquadFilter();
    const resonanceGain = audioContext.createGain();
    const reverb = audioContext.createConvolver();
    const reverbWetGain = audioContext.createGain();
    const masterLimiter = audioContext.createGain();
    const tremolo = audioContext.createGain();
    const tremoloOsc = audioContext.createOscillator();
    const tremoloGain = audioContext.createGain();
    const chorusDelay = audioContext.createDelay(0.05);
    const chorusModGain = audioContext.createGain();
    const chorusLfo = audioContext.createOscillator();
    const chorusWetGain = audioContext.createGain();
    const noiseSource = audioContext.createBufferSource();
    const noiseGain = audioContext.createGain();

    const initialPitchRatio = profile.initialPitchRatio ?? 1.02;
    const pitchSettleTime = profile.pitchSettleTime ?? 0.08;
    const harmonicMultiplier = profile.harmonicMultiplier ?? 2;
    const harmonicStartRatio = profile.harmonicStartRatio ?? initialPitchRatio;
    const harmonicSettleTime = profile.harmonicSettleTime ?? pitchSettleTime;
    const pitchDriftCents = profile.pitchDriftCents ?? 6;
    const detuneCents = pitchDriftCents ? (Math.random() - 0.5) * pitchDriftCents : 0;
    const harmonicDetuneStart = profile.harmonicDetune ?? 8;
    const harmonicDetuneEnd = profile.harmonicDetuneEnd ?? -detuneCents * 0.6;

    oscillator.type = profile.oscillatorType ?? 'sawtooth';
    oscillator.frequency.setValueAtTime(frequency * initialPitchRatio, now);
    oscillator.frequency.exponentialRampToValueAtTime(frequency, now + pitchSettleTime);
    oscillator.detune.setValueAtTime(detuneCents, now);

    harmonicsOsc.type = profile.harmonicsType ?? 'triangle';
    harmonicsOsc.frequency.setValueAtTime(
        frequency * harmonicMultiplier * harmonicStartRatio,
        now
    );
    harmonicsOsc.frequency.exponentialRampToValueAtTime(
        frequency * harmonicMultiplier,
        now + harmonicSettleTime
    );
    harmonicsOsc.detune.setValueAtTime(harmonicDetuneStart, now);
    harmonicsOsc.detune.linearRampToValueAtTime(harmonicDetuneEnd, now + duration);

    preampGain.gain.setValueAtTime(profile.preampGain ?? 0.9, now);

    envelopeGain.gain.setValueAtTime(0, now);
    envelopeGain.gain.linearRampToValueAtTime(
        envelopeSettings.peak,
        now + envelopeSettings.attack
    );
    envelopeGain.gain.linearRampToValueAtTime(
        envelopeSettings.sustain,
        now + envelopeSettings.attack + envelopeSettings.decay
    );
    envelopeGain.gain.exponentialRampToValueAtTime(
        Math.max(envelopeSettings.release, 0.0005),
        now + duration
    );

    vibratoOsc.type = 'sine';
    vibratoOsc.frequency.setValueAtTime(profile.vibratoFrequency ?? 5.8, now);
    const vibratoStart = frequency * (profile.vibratoDepthRatio ?? 0.011);
    const vibratoEnd = frequency * (profile.vibratoDepthEndRatio ?? 0.004);
    if (vibratoStart > 0) {
        vibratoGain.gain.setValueAtTime(vibratoStart, now);
        vibratoGain.gain.exponentialRampToValueAtTime(
            Math.max(vibratoEnd, 0.0001),
            now + duration
        );
    } else {
        vibratoGain.gain.setValueAtTime(0, now);
    }
    vibratoOsc.connect(vibratoGain);
    vibratoGain.connect(oscillator.frequency);

    toneFilter.type = 'lowpass';
    toneFilter.frequency.setValueAtTime(
        frequency * (profile.toneFrequencyMultiplier ?? 2.4),
        now
    );
    toneFilter.Q.value = profile.toneQ ?? 1.2;

    cabFilter.type = 'highshelf';
    cabFilter.frequency.setValueAtTime(3200, now);
    cabFilter.gain.setValueAtTime(profile.cabinetHighLoss ?? -6, now);

    distortion.curve = createDistortionCurve(profile.distortionAmount ?? 260);
    distortion.oversample = '4x';

    dryGain.gain.setValueAtTime(profile.dryGain ?? 0.45, now);

    resonanceFilter.type = 'bandpass';
    resonanceFilter.frequency.setValueAtTime(
        frequency * (profile.resonanceFrequencyMultiplier ?? 1.8),
        now
    );
    resonanceFilter.Q.value = profile.resonanceQ ?? 20;
    resonanceGain.gain.setValueAtTime(profile.resonanceGain ?? 0.38, now);

    const reverbMix = profile.reverbMix ?? 0.4;
    reverbWetGain.gain.setValueAtTime(reverbMix, now);

    // Apply frequency compensation to master gain
    const baseMasterGain = profile.masterGain ?? 0.82;
    const compensatedMasterGain = baseMasterGain * freqCompensation;
    masterLimiter.gain.setValueAtTime(compensatedMasterGain, now);

    tremolo.gain.setValueAtTime(1, now);
    const tremoloDepth = profile.tremoloDepth ?? 0.28;
    const tremoloDecayTarget = Math.max(profile.tremoloDecay ?? 0.1, 0.0001);
    tremoloOsc.type = 'sine';
    tremoloOsc.frequency.setValueAtTime(profile.tremoloFrequency ?? 7.2, now);
    if (tremoloDepth > 0) {
        tremoloGain.gain.setValueAtTime(tremoloDepth, now);
        tremoloGain.gain.exponentialRampToValueAtTime(
            tremoloDecayTarget,
            now + duration
        );
    } else {
        tremoloGain.gain.setValueAtTime(0.0001, now);
        tremoloGain.gain.linearRampToValueAtTime(0.0001, now + duration);
    }

    const chorusDepth = profile.chorusDepth ?? 0.0045;
    const chorusMix = profile.chorusMix ?? 0.32;
    const useChorus = chorusDepth > 0 && chorusMix > 0;
    const chorusDelayTime = profile.chorusDelayTime ?? 0.016;
    const chorusDepthEnd = Math.max(
        profile.chorusDepthEnd ?? chorusDepth * 0.5,
        0.0001
    );
    chorusDelay.delayTime.setValueAtTime(chorusDelayTime, now);
    chorusWetGain.gain.setValueAtTime(useChorus ? chorusMix : 0, now);

    const noiseLevel = profile.noiseLevel ?? 0.65;
    const useNoise = noiseLevel > 0;

    if (!reverbBuffer) {
        reverbBuffer = generateReverbImpulse(audioContext, 3.5, 4.2);
    }
    reverb.buffer = reverbBuffer;

    oscillator.connect(preampGain);
    harmonicsOsc.connect(preampGain);

    let noiseStarted = false;
    if (useNoise) {
        noiseSource.buffer = getNoiseBuffer(audioContext);
        noiseGain.gain.setValueAtTime(noiseLevel, now);
        const noiseDecayTime = profile.noiseDecay ?? 0.07;
        noiseGain.gain.exponentialRampToValueAtTime(
            Math.max(noiseLevel * 0.02, 0.0001),
            now + noiseDecayTime
        );
        noiseSource.connect(noiseGain);
        noiseGain.connect(preampGain);
        noiseStarted = true;
    }

    preampGain.connect(distortion);
    distortion.connect(toneFilter);
    toneFilter.connect(cabFilter);
    cabFilter.connect(envelopeGain);
    envelopeGain.connect(tremolo);

    tremolo.connect(dryGain);
    tremolo.connect(resonanceFilter);
    tremolo.connect(reverb);

    dryGain.connect(masterLimiter);

    resonanceFilter.connect(resonanceGain);
    resonanceGain.connect(masterLimiter);

    reverb.connect(reverbWetGain);
    reverbWetGain.connect(masterLimiter);

    let chorusStarted = false;
    if (useChorus) {
        const chorusRate = profile.chorusRate ?? 0.9;
        chorusLfo.type = 'sine';
        chorusLfo.frequency.setValueAtTime(chorusRate, now);
        chorusModGain.gain.setValueAtTime(chorusDepth, now);
        chorusModGain.gain.exponentialRampToValueAtTime(
            chorusDepthEnd,
            now + duration
        );
        tremolo.connect(chorusDelay);
        chorusDelay.connect(chorusWetGain);
        chorusWetGain.connect(masterLimiter);
        chorusLfo.connect(chorusModGain);
        chorusModGain.connect(chorusDelay.delayTime);
        chorusStarted = true;
    }

    masterLimiter.connect(audioContext.destination);

    tremoloOsc.connect(tremoloGain);
    tremoloGain.connect(tremolo.gain);

    const endTime = now + duration;

    toneFilter.frequency.exponentialRampToValueAtTime(
        frequency * (profile.toneFrequencyEndMultiplier ?? 1.2),
        endTime
    );

    oscillator.start(now);
    harmonicsOsc.start(now);
    vibratoOsc.start(now);
    tremoloOsc.start(now);

    if (chorusStarted) {
        chorusLfo.start(now);
    }

    if (noiseStarted) {
        noiseSource.start(now);
    }

    oscillator.stop(endTime);
    harmonicsOsc.stop(endTime);
    vibratoOsc.stop(endTime);
    tremoloOsc.stop(endTime);

    if (chorusStarted) {
        chorusLfo.stop(endTime);
    }

    if (noiseStarted) {
        noiseSource.stop(now + Math.min(duration, profile.noiseDecay ?? 0.07));
    }
}

// Recording and looping functionality
let isRecording = false;
let currentRecordingLoop = null;
let recordingStartTime = 0;
const loopRecordings = {
    1: [],
    2: [],
    3: []
};
const loopIntervals = {
    1: null,
    2: null,
    3: null
};
const loopStates = {
    1: false,
    2: false,
    3: false
};

function recordEvent(groupName, keyValue) {
    if (!isRecording || !currentRecordingLoop) return;
    
    const timestamp = Date.now() - recordingStartTime;
    loopRecordings[currentRecordingLoop].push({
        groupName,
        keyValue,
        timestamp
    });
}

function startRecording(loopNumber) {
    if (isRecording) {
        stopRecording();
    }
    
    isRecording = true;
    currentRecordingLoop = loopNumber;
    loopRecordings[loopNumber] = [];
    recordingStartTime = Date.now();
    
    const recordBtn = document.getElementById('record-btn');
    recordBtn.textContent = `Recording to Loop ${loopNumber}`;
    recordBtn.classList.add('recording');
    
    updateLoopButtons();
}

function stopRecording() {
    if (!isRecording) return;
    
    isRecording = false;
    const recordBtn = document.getElementById('record-btn');
    recordBtn.textContent = 'Record';
    recordBtn.classList.remove('recording');
    
    if (currentRecordingLoop && loopRecordings[currentRecordingLoop].length > 0) {
        const loopBtn = document.querySelector(`.loop-btn[data-loop="${currentRecordingLoop}"]`);
        if (loopBtn) {
            loopBtn.classList.add('has-recording');
        }
    }
    
    currentRecordingLoop = null;
    updateLoopButtons();
}

function stopAllLoops() {
    [1, 2, 3].forEach(loopNum => {
        if (loopStates[loopNum]) {
            stopLooping(loopNum);
        }
    });
}

function startLooping(loopNumber) {
    if (loopRecordings[loopNumber].length === 0 || loopStates[loopNumber]) return;
    
    // Stop all other loops first
    stopAllLoops();
    
    loopStates[loopNumber] = true;
    const loopBtn = document.querySelector(`.loop-btn[data-loop="${loopNumber}"]`);
    if (loopBtn) {
        loopBtn.classList.add('looping');
    }
    
    const events = loopRecordings[loopNumber];
    const totalDuration = events.length > 0 
        ? events[events.length - 1].timestamp + 1000 
        : 2000;
    
    function playLoop() {
        events.forEach(event => {
            setTimeout(() => {
                playKey(event.groupName, event.keyValue, true);
            }, event.timestamp);
        });
    }
    
    playLoop();
    loopIntervals[loopNumber] = setInterval(playLoop, totalDuration);
}

function stopLooping(loopNumber) {
    if (!loopStates[loopNumber]) return;
    
    loopStates[loopNumber] = false;
    if (loopIntervals[loopNumber]) {
        clearInterval(loopIntervals[loopNumber]);
        loopIntervals[loopNumber] = null;
    }
    
    const loopBtn = document.querySelector(`.loop-btn[data-loop="${loopNumber}"]`);
    if (loopBtn) {
        loopBtn.classList.remove('looping');
    }
}

function clearLoop(loopNumber) {
    stopLooping(loopNumber);
    loopRecordings[loopNumber] = [];
    
    const loopBtn = document.querySelector(`.loop-btn[data-loop="${loopNumber}"]`);
    if (loopBtn) {
        loopBtn.classList.remove('has-recording');
    }
}

function updateLoopButtons() {
    [1, 2, 3].forEach(loopNum => {
        const loopBtn = document.querySelector(`.loop-btn[data-loop="${loopNum}"]`);
        if (loopBtn) {
            const hasRecording = loopRecordings[loopNum].length > 0;
            if (!hasRecording) {
                loopBtn.classList.remove('has-recording');
            }
        }
    });
}

function playKey(groupName, keyValue, skipRecording = false) {
    const group = keyGroups[groupName];
    if (!group) {
        return;
    }

    const index = group.keys.indexOf(keyValue);
    if (index === -1) {
        return;
    }

    const keyElement = document.querySelector(`.xylophone-key[data-group="${groupName}"][data-key="${keyValue}"]`);
    if (!keyElement) {
        return;
    }

    // Record the event if recording (unless playing from a loop)
    if (!skipRecording) {
        recordEvent(groupName, keyValue);
    }

    initAudio();

    const highlightColor = xylophoneColors[index % xylophoneColors.length];
    keyElement.style.backgroundColor = highlightColor;
    keyElement.classList.add('playing');

    const effectiveProfile = getProfileForGroup(currentProfile, groupName);
    const toneDuration = getToneDurationForGroup(effectiveProfile, groupName);
    playTone(group.frequencies[index], toneDuration, effectiveProfile);

    const releaseDelay = Math.max(toneDuration * 1000, 350);
    setTimeout(() => {
        keyElement.style.backgroundColor = '';
        keyElement.classList.remove('playing');
    }, releaseDelay);

    const noteName = group.notes ? group.notes[index] : keyElement.getAttribute('data-note');
    if (noteName) {
        keyElement.setAttribute('data-note', noteName);
    }

    console.log(
        `[${effectiveProfile.name}] Key ${keyValue.toUpperCase()} (${noteName || groupName}) played at ${group.frequencies[index]}Hz`
    );
}

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();

    if (numberKeys.includes(key)) {
        playKey('numbers', key);
    } else if (letterKeys.includes(key)) {
        playKey('letters', key);
    } else if (middleKeys.includes(key)) {
        playKey('middle', key);
    } else if (drumKeys.includes(key)) {
        playKey('drums', key);
    }
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('xylophone-key')) {
        const groupName = event.target.getAttribute('data-group');
        const keyValue = event.target.getAttribute('data-key');
        playKey(groupName, keyValue);
    }
});

// Record and Loop button event listeners
document.addEventListener('DOMContentLoaded', () => {
    const recordBtn = document.getElementById('record-btn');
    
    // Record button - cycles through loops 1, 2, 3
    if (recordBtn) {
        recordBtn.addEventListener('click', () => {
            if (isRecording) {
                stopRecording();
            } else {
                // Find first available loop or use loop 1
                let targetLoop = 1;
                for (let i = 1; i <= 3; i++) {
                    if (loopRecordings[i].length === 0) {
                        targetLoop = i;
                        break;
                    }
                }
                startRecording(targetLoop);
            }
        });
    }
    
    // Loop buttons - toggle play/stop for each loop
    document.querySelectorAll('.loop-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Don't trigger if clicking the clear button
            if (e.target.classList.contains('loop-clear')) {
                return;
            }
            
            const loopNumber = parseInt(btn.getAttribute('data-loop'));
            
            if (isRecording && currentRecordingLoop === loopNumber) {
                stopRecording();
            } else if (loopStates[loopNumber]) {
                stopLooping(loopNumber);
            } else {
                if (loopRecordings[loopNumber].length > 0) {
                    startLooping(loopNumber);
                } else if (!isRecording) {
                    // If no recording, start recording to this loop
                    startRecording(loopNumber);
                }
            }
        });
    });
    
    // Clear buttons (X)
    document.querySelectorAll('.loop-clear').forEach(clearBtn => {
        clearBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the loop button
            const loopNumber = parseInt(clearBtn.getAttribute('data-loop'));
            clearLoop(loopNumber);
        });
    });
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

