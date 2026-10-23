:root {
  --espresso: #150d08;
  --coffee: #2a1a12;
  --mocha: #4a2e1e;
  --gold: #d9a441;
  --gold-soft: #ebcb8b;
  --cream: #f9f4ea;
  --cream-2: #f0e6d6;
  --sand: #e3d5be;
  --red: #b23a2e;
  --green: #1e6b4b;
  --text: #2b1b12;
  --muted: #8a7361;
  --line: rgba(43, 27, 18, 0.12);
  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
  --radius-s: 14px;
  --radius: 22px;
  --radius-l: 34px;
  --shadow-s: 0 8px 24px -12px rgba(21, 13, 8, 0.25);
  --shadow: 0 28px 60px -28px rgba(21, 13, 8, 0.4);
  --shadow-l: 0 50px 100px -40px rgba(21, 13, 8, 0.55);
  --ease: cubic-bezier(0.22, 0.68, 0.3, 1);
  --pattern: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23D9A441' stroke-width='1'%3E%3Cpath d='M40 3l3 17 17 3-17 3-3 17-3-17-17-3 17-3 3-17z'/%3E%3C/g%3E%3C/svg%3E");
}

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  scroll-padding-top: 96px;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  font-family: var(--font-body);
  background: var(--cream);
  color: var(--text);
  line-height: 1.65;
  font-size: 16px;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 9998;
  pointer-events: none;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='table' tableValues='0 0.12'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)'/%3E%3C/svg%3E");
}

a {
  color: inherit;
  text-decoration: none;
}

button, input, select, textarea {
  font: inherit;
  color: inherit;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

img, svg {
  display: block;
  max-width: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

::selection {
  background: var(--gold);
  color: var(--espresso);
}

.container {
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 120px 0;
  position: relative;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 20px;
}

.eyebrow::before {
  content: "";
  width: 28px;
  height: 1px;
  background: currentColor;
  opacity: 0.6;
}

.eyebrow--dark {
  color: var(--mocha);
}

.section-title {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2.1rem, 4.6vw, 3.6rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: var(--coffee);
}

.section-title em {
  font-style: italic;
  font-weight: 400;
  color: var(--red);
}

.lead {
  font-size: 1.06rem;
  color: var(--muted);
  max-width: 56ch;
  line-height: 1.75;
}

.on-dark {
  color: var(--cream);
}

.on-dark em {
  color: var(--gold);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: transform 0.35s var(--ease), background 0.35s, color 0.35s, box-shadow 0.35s, border-color 0.35s;
  white-space: nowrap;
}

.btn:hover {
  transform: translateY(-3px);
}

.btn--gold {
  background: var(--gold);
  color: var(--espresso);
  box-shadow: 0 16px 34px -16px rgba(217, 164, 65, 0.85);
}

.btn--gold:hover {
  background: var(--gold-soft);
}

.btn--ghost {
  border: 1px solid rgba(249, 244, 234, 0.28);
  color: var(--cream);
}

.btn--ghost:hover {
  border-color: var(--gold);
  color: var(--gold);
}

.btn--dark {
  background: var(--coffee);
  color: var(--cream);
}

.btn--dark:hover {
  background: var(--espresso);
  box-shadow: var(--shadow-s);
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: padding 0.45s var(--ease), background 0.45s, box-shadow 0.45s, backdrop-filter 0.45s;
}

.header.is-scrolled {
  padding: 11px 0;
  background: rgba(21, 13, 8, 0.82);
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  box-shadow: 0 1px 0 rgba(217, 164, 65, 0.14), 0 20px 40px -30px #000;
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--cream);
  flex-shrink: 0;
}

.logo__mark {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(145deg, var(--gold), #b07c24);
  color: var(--espresso);
  box-shadow: 0 10px 24px -12px rgba(217, 164, 65, 0.9);
  transition: transform 0.5s var(--ease);
}

.logo:hover .logo__mark {
  transform: rotate(-8deg) scale(1.05);
}

.logo__mark svg {
  width: 22px;
  height: 22px;
}

.logo__text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo__name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.22rem;
  letter-spacing: -0.01em;
}

.logo__sub {
  font-size: 0.6rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--gold);
  margin-top: 4px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 38px;
}

.nav__link {
  position: relative;
  font-size: 0.87rem;
  font-weight: 500;
  color: rgba(249, 244, 234, 0.72);
  transition: color 0.3s;
  padding: 4px 0;
}

.nav__link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.5px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.45s var(--ease);
}

.nav__link:hover,
.nav__link.is-active {
  color: var(--cream);
}

.nav__link:hover::after,
.nav__link.is-active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.header__cta {
  padding: 12px 24px;
  font-size: 0.84rem;
}

.burger {
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(249, 244, 234, 0.2);
  place-items: center;
  gap: 5px;
  flex-direction: column;
  transition: border-color 0.3s, background 0.3s;
}

.burger:hover {
  border-color: var(--gold);
}

.burger span {
  display: block;
  width: 18px;
  height: 1.5px;
  background: var(--cream);
  border-radius: 2px;
  transition: transform 0.4s var(--ease), opacity 0.3s;
}

.burger.is-open span:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}

.burger.is-open span:nth-child(2) {
  opacity: 0;
}

.burger.is-open span:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

.drawer {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: linear-gradient(165deg, #1e130c, #0d0705);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 34px 50px;
  clip-path: circle(0% at calc(100% - 44px) 44px);
  transition: clip-path 0.75s var(--ease);
  pointer-events: none;
}

.drawer.is-open {
  clip-path: circle(150% at calc(100% - 44px) 44px);
  pointer-events: auto;
}

.drawer::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--pattern);
  background-size: 80px 80px;
  opacity: 0.07;
  pointer-events: none;
}

.drawer__nav {
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
}

.drawer__link {
  font-family: var(--font-display);
  font-size: clamp(2rem, 9vw, 3rem);
  font-weight: 500;
  color: var(--cream);
  padding: 10px 0;
  display: flex;
  align-items: baseline;
  gap: 16px;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s var(--ease), transform 0.5s var(--ease), color 0.3s;
}

.drawer__link small {
  font-family: var(--font-body);
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  color: var(--gold);
  font-weight: 600;
}

.drawer__link:hover {
  color: var(--gold);
}

.drawer.is-open .drawer__link {
  opacity: 1;
  transform: none;
}

.drawer.is-open .drawer__link:nth-child(1) { transition-delay: 0.16s; }
.drawer.is-open .drawer__link:nth-child(2) { transition-delay: 0.22s; }
.drawer.is-open .drawer__link:nth-child(3) { transition-delay: 0.28s; }
.drawer.is-open .drawer__link:nth-child(4) { transition-delay: 0.34s; }
.drawer.is-open .drawer__link:nth-child(5) { transition-delay: 0.4s; }

.drawer__footer {
  margin-top: auto;
  padding-top: 40px;
  color: rgba(249, 244, 234, 0.45);
  font-size: 0.82rem;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 26px;
  position: relative;
}

.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding: 150px 0 90px;
  overflow: hidden;
  background: radial-gradient(1000px 640px at 82% 8%, rgba(217, 164, 65, 0.17), transparent 62%),
    radial-gradient(760px 560px at 6% 96%, rgba(178, 58, 46, 0.2), transparent 62%),
    linear-gradient(165deg, #241610 0%, #150d08 55%, #0c0704 100%);
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--pattern);
  background-size: 80px 80px;
  opacity: 0.055;
  pointer-events: none;
}

.hero__glow {
  position: absolute;
  width: 640px;
  height: 640px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(217, 164, 65, 0.2), transparent 68%);
  top: -160px;
  right: -140px;
  filter: blur(20px);
  pointer-events: none;
  animation: pulse 9s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.85; }
  50% { transform: scale(1.14); opacity: 0.55; }
}

.hero__grid {
  position: relative;
  display: grid;
  grid-template-columns: 1.06fr 0.94fr;
  gap: 64px;
  align-items: center;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px 8px 10px;
  border-radius: 999px;
  border: 1px solid rgba(217, 164, 65, 0.3);
  background: rgba(217, 164, 65, 0.07);
  color: var(--gold-soft);
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.hero__badge i {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 0 4px rgba(74, 222, 128, 0.18);
  animation: blip 2.4s ease-in-out infinite;
}

@keyframes blip {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}

.hero h1 {
  margin: 0 0 26px;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(2.6rem, 6.1vw, 4.6rem);
  line-height: 1.02;
  letter-spacing: -0.032em;
  color: var(--cream);
}

.hero h1 em {
  font-style: italic;
  font-weight: 400;
  background: linear-gradient(100deg, var(--gold), var(--gold-soft) 45%, #b07c24);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__text {
  color: rgba(249, 244, 234, 0.66);
  font-size: 1.08rem;
  line-height: 1.78;
  max-width: 50ch;
  margin: 0 0 40px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 56px;
}

.hero__stats {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 46px;
  padding-top: 34px;
  border-top: 1px solid rgba(249, 244, 234, 0.1);
}

.stat__num {
  font-family: var(--font-display);
  font-size: 1.95rem;
  font-weight: 600;
  color: var(--cream);
  line-height: 1;
  letter-spacing: -0.02em;
}

.stat__num span {
  color: var(--gold);
}

.stat__label {
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(249, 244, 234, 0.42);
  margin-top: 9px;
  font-weight: 500;
}

.hero__art {
  position: relative;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  max-width: 520px;
  margin-inline: auto;
  width: 100%;
}

.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed rgba(217, 164, 65, 0.32);
  inset: 0;
  animation: spin 48s linear infinite;
}

.ring--2 {
  inset: 11%;
  border-style: solid;
  border-color: rgba(217, 164, 65, 0.16);
  animation-duration: 32s;
  animation-direction: reverse;
}

.ring--3 {
  inset: 23%;
  border-color: rgba(249, 244, 234, 0.09);
  animation-duration: 60s;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.hero__disc {
  position: absolute;
  inset: 26%;
  border-radius: 50%;
  background: radial-gradient(circle at 34% 28%, #6e4429 0%, #3a2317 42%, #1a0f09 78%);
  box-shadow: inset 0 0 70px rgba(0, 0, 0, 0.75), inset 0 -18px 50px rgba(217, 164, 65, 0.1), 0 50px 90px -40px #000;
}

.hero__disc::after {
  content: "";
  position: absolute;
  inset: 14%;
  border-radius: 50%;
  border: 1px solid rgba(217, 164, 65, 0.16);
}

.jebena {
  position: relative;
  width: 52%;
  color: var(--gold);
  filter: drop-shadow(0 26px 40px rgba(0, 0, 0, 0.6));
  animation: floaty 7s ease-in-out infinite;
}

@keyframes floaty {
  0%, 100% { transform: translateY(0) rotate(-1deg); }
  50% { transform: translateY(-14px) rotate(1deg); }
}

.steam {
  position: absolute;
  top: 6%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
  pointer-events: none;
}

.steam span {
  width: 3px;
  height: 56px;
  border-radius: 99px;
  background: linear-gradient(to top, rgba(249, 244, 234, 0.55), transparent);
  filter: blur(1.2px);
  animation: steam 3.6s ease-in-out infinite;
}

.steam span:nth-child(2) {
  animation-delay: 0.7s;
  height: 70px;
}

.steam span:nth-child(3) {
  animation-delay: 1.4s;
  height: 48px;
}

@keyframes steam {
  0% { transform: translateY(10px) scaleY(0.6); opacity: 0; }
  40% { opacity: 0.75; }
  100% { transform: translateY(-34px) scaleY(1.25); opacity: 0; }
}

.bean {
  position: absolute;
  width: 22px;
  height: 30px;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  background: linear-gradient(145deg, #5c3a26, #241610);
  box-shadow: inset -2px -2px 6px rgba(0, 0, 0, 0.6), 0 8px 18px -8px #000;
}

.bean::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 12%;
  width: 1.5px;
  height: 76%;
  background: rgba(217, 164, 65, 0.4);
  transform: translateX(-50%) rotate(6deg);
  border-radius: 99px;
}

.bean--1 { top: 6%; left: 12%; animation: floaty 5.5s ease-in-out infinite; }
.bean--2 { bottom: 14%; right: 8%; width: 16px; height: 22px; animation: floaty 6.8s ease-in-out .9s infinite; }
.bean--3 { top: 52%; left: -2%; width: 13px; height: 18px; animation: floaty 8s ease-in-out .4s infinite; }

.scroll-cue {
  position: absolute;
  bottom: 34px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: rgba(249, 244, 234, 0.4);
  font-size: 0.64rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-weight: 600;
}

.scroll-cue i {
  width: 1px;
  height: 44px;
  background: linear-gradient(to bottom, rgba(217, 164, 65, 0.9), transparent);
  position: relative;
  overflow: hidden;
}

.scroll-cue i::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 14px;
  background: var(--gold);
  animation: drop 2.2s ease-in-out infinite;
}

@keyframes drop {
  0% { transform: translateY(-16px); opacity: 0; }
  40% { opacity: 1; }
  100% { transform: translateY(46px); opacity: 0; }
}

.marquee {
  background: var(--coffee);
  padding: 26px 0;
  overflow: hidden;
  position: relative;
  border-block: 1px solid rgba(217, 164, 65, 0.12);
}

.marquee::before,
.marquee::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 130px;
  z-index: 2;
  pointer-events: none;
}

.marquee::before { left: 0; background: linear-gradient(to right, var(--coffee), transparent); }
.marquee::after { right: 0; background: linear-gradient(to left, var(--coffee), transparent); }

.marquee__track {
  display: flex;
  align-items: center;
  gap: 44px;
  width: max-content;
  animation: marquee 34s linear infinite;
}

.marquee:hover .marquee__track {
  animation-play-state: paused;
}

@keyframes marquee {
  to { transform: translateX(-50%); }
}

.marquee__item {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 500;
  color: rgba(249, 244, 234, 0.7);
  white-space: nowrap;
  letter-spacing: 0.01em;
}

.marquee__dot {
  color: var(--gold);
  opacity: 0.5;
  font-size: 0.7rem;
}

.about {
  background: var(--cream);
  overflow: hidden;
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about__body p {
  color: var(--muted);
  margin: 0 0 20px;
  line-height: 1.8;
}

.about__body p:last-of-type {
  margin-bottom: 34px;
}

.about__points {
  display: grid;
  gap: 16px;
  margin-bottom: 38px;
}

.point {
  display: flex;
  gap: 15px;
  align-items: flex-start;
}

.point__icon {
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 11px;
  display: grid;
  place-items: center;
  background: var(--cream-2);
  color: var(--mocha);
  transition: background 0.35s, color 0.35s, transform 0.35s var(--ease);
}

.point:hover .point__icon {
  background: var(--gold);
  color: var(--espresso);
  transform: translateY(-2px);
}

.point__icon svg {
  width: 18px;
  height: 18px;
}

.point h4 {
  margin: 0 0 2px;
  font-size: 0.95rem;
  font-weight: 600;
}

.point p {
  margin: 0;
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.6;
}

.about__visual {
  position: relative;
}

.about__card {
  position: relative;
  border-radius: var(--radius-l);
  overflow: hidden;
  aspect-ratio: 4 / 4.6;
  background: radial-gradient(circle at 70% 18%, rgba(217, 164, 65, 0.34), transparent 55%),
    radial-gradient(circle at 20% 88%, rgba(178, 58, 46, 0.3), transparent 58%),
    linear-gradient(150deg, #3a2317, #150d08);
  box-shadow: var(--shadow-l);
  display: grid;
  place-items: center;
}

.about__card::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--pattern);
  background-size: 80px 80px;
  opacity: 0.09;
}

.about__card-inner {
  position: relative;
  text-align: center;
  padding: 44px 38px;
  color: var(--cream);
}

.about__card-inner svg {
  width: 78px;
  height: 78px;
  color: var(--gold);
  margin: 0 auto 26px;
}

.about__quote {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.42rem;
  font-weight: 400;
  font-style: italic;
  line-height: 1.5;
  letter-spacing: -0.01em;
}

.about__quote-attr {
  display: inline-block;
  margin-top: 22px;
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 600;
  font-style: normal;
}

.about__badge {
  position: absolute;
  bottom: -26px;
  left: -26px;
  background: var(--cream);
  border-radius: var(--radius);
  padding: 20px 26px;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid var(--line);
}

.about__badge-num {
  font-family: var(--font-display);
  font-size: 2.1rem;
  font-weight: 600;
  color: var(--red);
  line-height: 1;
  letter-spacing: -0.03em;
}

.about__badge-txt {
  font-size: 0.76rem;
  line-height: 1.4;
  color: var(--muted);
  font-weight: 500;
  max-width: 12ch;
}

.menu {
  background: var(--cream-2);
  position: relative;
  overflow: hidden;
}

.menu::before {
  content: "";
  position: absolute;
  top: -120px;
  right: -120px;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(217, 164, 65, 0.18), transparent 70%);
  pointer-events: none;
}

.menu__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 52px;
}

.filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 6px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 999px;
  border: 1px solid var(--line);
  backdrop-filter: blur(8px);
}

.filter {
  padding: 10px 22px;
  border-radius: 999px;
  font-size: 0.83rem;
  font-weight: 600;
  color: var(--muted);
  transition: background 0.35s var(--ease), color 0.35s, box-shadow 0.35s;
}

.filter:hover {
  color: var(--coffee);
}

.filter.is-active {
  background: var(--coffee);
  color: var(--cream);
  box-shadow: 0 10px 22px -12px rgba(42, 26, 18, 0.8);
}

.menu__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 20px;
}

.dish {
  display: grid;
  grid-template-columns: 58px 1fr auto;
  gap: 18px;
  align-items: center;
  padding: 22px;
  background: #fff;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  transition: transform 0.5s var(--ease), box-shadow 0.5s var(--ease), border-color 0.4s, opacity 0.4s;
  position: relative;
  overflow: hidden;
}

.dish::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--gold);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.5s var(--ease);
}

.dish:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow);
  border-color: rgba(217, 164, 65, 0.4);
}

.dish:hover::after {
  transform: scaleY(1);
  transform-origin: top;
}

.dish__icon {
  width: 58px;
  height: 58px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: linear-gradient(145deg, var(--cream-2), #e0cfb2);
  color: var(--mocha);
  transition: background 0.45s, color 0.45s, transform 0.5s var(--ease);
}

.dish:hover .dish__icon {
  background: linear-gradient(145deg, var(--gold), #b07c24);
  color: var(--espresso);
  transform: rotate(-6deg) scale(1.05);
}

.dish__icon svg {
  width: 26px;
  height: 26px;
}

.dish__name {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.08rem;
  font-weight: 600;
  color: var(--coffee);
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.dish__desc {
  margin: 5px 0 0;
  font-size: 0.83rem;
  color: var(--muted);
  line-height: 1.55;
}

.dish__tag {
  display: inline-block;
  font-size: 0.6rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--red);
  margin-top: 9px;
  opacity: 0.85;
}

.dish__price {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--coffee);
  white-space: nowrap;
  text-align: right;
}

.menu__note {
  margin: 44px 0 0;
  text-align: center;
  font-size: 0.85rem;
  color: var(--muted);
}

.menu__note strong {
  color: var(--coffee);
}

.ceremony {
  background: linear-gradient(170deg, #1e130c, #0c0704);
  position: relative;
  overflow: hidden;
}

.ceremony::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--pattern);
  background-size: 80px 80px;
  opacity: 0.06;
}

.ceremony__glow {
  position: absolute;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(178, 58, 46, 0.22), transparent 68%);
  left: -220px;
  bottom: -260px;
  filter: blur(30px);
}

.steps {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  margin-top: 32px;
}

.steps::before {
  content: "";
  position: absolute;
  top: 44px;
  left: 8%;
  right: 8%;
  height: 1px;
  background: repeating-linear-gradient(to right, rgba(217, 164, 65, 0.45) 0 6px, transparent 6px 14px);
  z-index: 0;
}

.step {
  position: relative;
  z-index: 1;
  padding: 34px 26px 30px;
  border-radius: var(--radius);
  background: rgba(249, 244, 234, 0.035);
  border: 1px solid rgba(249, 244, 234, 0.09);
  backdrop-filter: blur(6px);
  transition: transform 0.55s var(--ease), background 0.45s, border-color 0.45s;
}

.step:hover {
  transform: translateY(-8px);
  background: rgba(249, 244, 234, 0.06);
  border-color: rgba(217, 164, 65, 0.35);
}

.step__num {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(145deg, #2a1a12, #150d08);
  border: 1px solid rgba(217, 164, 65, 0.32);
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--gold);
  margin-bottom: 24px;
  transition: transform 0.5s var(--ease), background 0.45s, color 0.45s;
}

.step:hover .step__num {
  background: linear-gradient(145deg, var(--gold), #b07c24);
  color: var(--espresso);
  transform: scale(1.08) rotate(-6deg);
}

.step h3 {
  margin: 0 0 6px;
  font-family: var(--font-display);
  font-size: 1.24rem;
  font-weight: 600;
  color: var(--cream);
  letter-spacing: -0.015em;
}

.step p {
  margin: 0;
  color: rgba(249, 244, 234, 0.7);
  line-height: 1.7;
}

.visit__grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  align-items: center;
}

.visit__card {
  background: linear-gradient(180deg, rgba(42, 26, 18, 0.04), rgba(42, 26, 18, 0.02));
  border: 1px solid var(--line);
  border-radius: var(--radius-l);
  padding: 30px;
  box-shadow: var(--shadow-s);
}

.visit__card p {
  margin: 0 0 18px;
  color: var(--muted);
  line-height: 1.7;
}

.visit__card strong {
  color: var(--coffee);
}

.site-footer {
  background: #120a07;
  color: rgba(249, 244, 234, 0.72);
  padding: 28px 0;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.footer__logo {
  display: block;
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--cream);
  margin-bottom: 4px;
}

.site-footer p {
  margin: 0;
}

.footer__links {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.footer__links a:hover {
  color: var(--gold-soft);
}

@media (max-width: 980px) {
  .nav {
    display: none;
  }

  .header__cta {
    display: none;
  }

  .burger {
    display: inline-flex;
  }

  .hero__grid,
  .about__grid,
  .visit__grid,
  .steps {
    grid-template-columns: 1fr;
  }

  .steps {
    gap: 18px;
  }

  .steps::before {
    display: none;
  }
}

@media (max-width: 640px) {
  .section {
    padding: 88px 0;
  }

  .hero {
    padding-top: 120px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .btn {
    width: 100%;
  }

  .menu__grid {
    grid-template-columns: 1fr;
  }

  .dish {
    grid-template-columns: 52px 1fr;
  }

  .dish__price {
    grid-column: 2;
    text-align: left;
    margin-top: -6px;
  }

  .about__badge {
    left: 12px;
    right: 12px;
    bottom: -18px;
  }
}
