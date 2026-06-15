import { exp } from "three/tsl";

const $ =  (id) => document.getElementById(id);

export const canvas = $('simulation-canvas');
export const hero = $('hero');
export const hud = document.querySelector('.hud');
export const startbtn=  $('start');
export const startTourBtn = $('startTour');

export const md = $('md');
export const stat = $('stat');
export const o2bar = $('o2-bar');
export const bfbar = $('bf-bar');
export const co2bar = $('co2-bar');
export const o2t = $('o2-t');
export const bft = $('bf-t');
export const co2t = $('co2-t');
export const alT = $('al-t');
export const tiT = $('ti-t');

export const tt = $('tt');
export const ttTitle = $('tt-title');
export const ttBody =  $('tt-body');
 
export const tgtPanel = $('target');
export const tgtTitle = $('tgt-Title');
export const tgtNorad = $('tgt-norad');
export const tgtAlt = $('tgt-alt');
export const tgtVel = $('tgt-vel');
export const btnRecycle = $('btn-recycle');
export const btnDeorbit =$('btn-deboribt');

export const openLogBtn = $('open-log');
export const logOverlay = $('log-overlay');
export const logClose = $('log-close');
export const logList = $('log-list');
export const btnDock = $('dock');
export const btnMarket = $('market');
export const aboutBtn = $('about');
export const marketOverlay = $('market-overlay');
export const marketClose = $('market-close');
export const aboutOverlay = $('about-overlay');
export const aboutClose = $('about-close');
export const toastBox = $('toast');
export const processViz = $('process');

