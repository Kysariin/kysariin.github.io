import React from "react";
import { ProjectMedia } from "@/components/ProjectMedia";

// g0ngsh1 images
import g0ngsh1HeroImage from "@/assets/g0ngsh1/g0ngsh1_hero.png";
import g0ngsh1BaseImage from "@/assets/g0ngsh1/g0ngsh1_base.png";
import g0ngsh1TopImage from "@/assets/g0ngsh1/g0ngsh1_top.png";
import g0ngsh1HeaderImage from "@/assets/g0ngsh1/g0ngsh1_pinheader.png";
import g0ngsh1SolderBImage from "@/assets/g0ngsh1/g0ngsh1_solder_bottom.png";
import g0ngsh1SolderTImage from "@/assets/g0ngsh1/g0ngsh1_solder_top.png";

// colorful keyboard image
import colorfulKeyboardImage from "@/assets/colorfulkeyboard/colorfulkeyboard.png";

// heArt imedia
import heartVideo from "@/assets/heArt/lightVideo.mp4";
import heartPostMill from "@/assets/heArt/postMilling.png";
import heartMidSolder from "@/assets/heArt/midSolder.png";
import heartPCBeditor from "@/assets/heArt/PCBeditor.png";
import heartSchematic from "@/assets/heArt/schematic.png";
import heartMap from "@/assets/heArt/solderingMap.png";
import heartLightStill from "@/assets/heArt/stillLight.png";
import heartCloseup from "@/assets/heArt/closeup.png";
import heartLeftCloseup from "@/assets/heArt/leftCloseup.png";
import heartRightCloseup from "@/assets/heArt/rightCloseup.png";

// colorful keyboard + synth image
import colorfulKeyboard2Image from "@/assets/modsynthkeyboard/lab2keyboard.png";

// babel images
import babelHero from "@/assets/babel/babel_hero.png";
import babelGraph from "@/assets/babel/babel_claude_graph.svg";
import babelNotebook from "@/assets/babel/babel_notebook.jpeg";
import babelFigure from "@/assets/babel/babel_figure.jpeg";

// sprawl images
import sprawlHero from "@/assets/sprawl/sprawlHero.png";
import sprawlESP32 from "@/assets/sprawl/sprawlESP32.png";
import sprawlCarve from "@/assets/sprawl/sprawlCarve.png";
import sprawlSolder from "@/assets/sprawl/sprawlSolder.png";
import sprawlInterior from "@/assets/sprawl/sprawlInterior.png";

// seance images
import seanceTitleImage from "@/assets/seance/seanceTitle.png";
import seanceScreenImage from "@/assets/seance/seanceScreen.png";

// (dis)order media
import disorderGIF from "@/assets/(dis)order/disorder.gif";
import disorderThumb from "@/assets/(dis)order/disorderThumb.png";

// rotom image
import rotomHeroImage from "@/assets/rotom/squirtle_charmander.png";

// utagoe images
import utagoeHeroImage from "@/assets/utagoe/utagoe_hero.png";
import utagoeUiImage from "@/assets/utagoe/utagoe_ui.png";

// mta pachinko images
import mtaDesignDraft from "@/assets/mta/designdraft.jpg";
import mtaBoardCut from "@/assets/mta/boardcutted.jpg";
import mtaDryingRack from "@/assets/mta/drying_rack.jpg";
import mtaSecuredSiderails from "@/assets/mta/secured_siderails.png";
import mtaChuteWiring from "@/assets/mta/chutecollector_wiring.png";
import mtaBallCollectorESP32 from "@/assets/mta/ballcollector_score_esp32.png";
import mtaDuringDemo from "@/assets/mta/duringdemo.gif";
import mtaDuringDemoStill from "@/assets/mta/duringdemo.png";
import mtaPythonSim from "@/assets/mta/pythonsim.gif";
import mtaBackOfBoard from "@/assets/mta/backofboard (finished).jpg";
import mtaWiringDone from "@/assets/mta/wiring done.jpg";

export const PROJECTS = {
  systems: [
    {
      slug: "rotom",
      title: "rotom",
      date: "2026-05-11",
      description: "A wireless two-player Pokémon battle system built on a pair of ESP32s communicating over ESP-NOW. Implements real stat stages, a Gen 1 type chart, and sprite rendering on the TTGO's 240×135 TFT.",
      tags: ["ESP32", "ESP-NOW", "TFT display", "embedded C++", "physical computing"],
      imageUrl: rotomHeroImage,
      content: (
        <>
          <p className="font-mono text-[11px] text-primary/70 tracking-tight lowercase mb-8">
            // for the technical details: <a href="https://github.com/Kysariin/pokemonbattle" target="_blank" className="hover:underline text-primary">github.com/Kysariin/pokemonbattle</a>
          </p>
          <h2>Concept</h2>
          <p>
            The idea came from a very specific memory of me and my brother sitting in the back of a car as a kid, on a highway in the middle of nowhere, and battling each other in Pokémon on our DS's. The two handhelds just found each other. Now that I somewhat understood how the technology worked, I wanted to implement it myself.
          </p>
          <p>
            ESP-NOW is a connectionless peer-to-peer protocol built into the ESP32 that lets two boards communicate directly over radio without a router or shared network. When I learned about it in class I immediately thought, "Oh, this is how PictoChat must have worked," which prompted me to then think about other wireless DS communication methods (Pokémon).
          </p>
          <p>
            From there I tried to implement the battle system correctly. That meant a real stat stage system (the ±1/2/3 attack and defense modifiers that stack across turns), a type effectiveness chart (accurate to Gen 1), and a move selection interface where you can read what a move does before committing to it. I also wanted the battle state to stay in sync across both boards -- both devices run the same damage formula on the same inputs independently, which felt cleaner to implement.
          </p>
          <p>
            I named it after Rotom, which possesses electronics and bends them toward something unintended. Obviously this has been intended before (Pokémon battles on DS existed), but Rotom breathes new life into electronics, and the ESP-32s feel more like handheld games now to me. Thus I find it fitting.
          </p>
          <p>
            I found the sprites on PokeAPI. The TTGO's 240×135 TFT can push 16-bit RGB565 bitmaps quickly enough to show each Pokémon's front and back sprite during battle, positioned the way they actually appear in the games. After looking for different approaches for this, I had Claude help me translate the pngs into C arrays so they could be displayed.
          </p>

          <h2>Hardware</h2>
          <table className="min-w-full text-sm font-mono border-t border-border/40 mt-4 mb-8">
            <thead>
              <tr className="text-primary/70 border-b border-border/40 text-left">
                <th className="py-2">Component</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Role</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr><td className="py-2">LilyGO TTGO T-Display (ESP32)</td><td>2</td><td>One per player -- handles input, display, and wireless</td></tr>
            </tbody>
          </table>
          <p>Each board uses its two built-in physical buttons.</p>

          <h2>System Design</h2>
          <p>
            The game runs across three phases: selection, battle, and game over. In selection, both players scroll through a roster of four Pokémon and lock in a choice. Once both boards confirm, the battle starts automatically.
          </p>
          <p>
            During battle, moves are transmitted as a move index (0–3), never as damage values. Each board looks up the move from its local copy of the shared roster and runs the same damage formula, which accounts for the move's base power, both players' current stat stages, and the type matchup between the move and the defending Pokémon. The type chart covers all relevant interactions for the roster: Water beats Fire, Fire beats Grass, Grass beats Water, Electric beats Water. Super effective and not very effective hits are noted in the status line.
          </p>
          <p>
            Stat stages accumulate across turns and feed directly into the damage formula, so the effect of something like Tail Whip is visible in the numbers over time rather than just described.
          </p>
          <p>The packet structure is minimal:</p>
          <pre><code>{`typedef struct {
  uint8_t type;   // PKT_SELECT, PKT_MOVE, or PKT_RESET
  uint8_t data;   // pokemon index or move index
  uint8_t seq;    // for duplicate detection
} BattlePacket;`}</code></pre>

          <h2>Build</h2>
          <ProjectMedia
            src={rotomHeroImage}
            alt="Squirtle vs. Charmander battle on two TTGO displays"
            caption="Squirtle vs. Charmander — both boards side by side during a live battle."
            variant="below"
            aspect="video"
          />
          <div className="relative w-full aspect-video my-8 border border-border/40 rounded-md overflow-hidden bg-card/30">
            <iframe
              src="https://www.youtube.com/embed/yGg6aisS4MQ"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              className="absolute top-0 left-0 w-full h-full"
              title="rotom battle demo"
            ></iframe>
          </div>

          <h2>Difficulties</h2>
          <p>
            The biggest early bug was a phantom button press on boot. GPIO 0 is the ESP32's bootloader pin and reads LOW briefly at startup, which my code was interpreting as input. Device 1 would fire a move at the beginning of every battle before the opponent had even loaded. A two-second <code>millis()</code> guard at the top of the loop fixed it by ignoring all input until the boot sequence settled.
          </p>
          <p>
            Related to that: I originally had the confirm action mapped to GPIO 0, which meant spamming it during the opponent's turn could push the chip into bootloader mode and crash the board. Swapping the roles (GPIO 0 to scroll, GPIO 35 to confirm) fixed it since GPIO 35 has no special boot behavior.
          </p>
          <p>
            The sprite colors were also wrong for a while. My conversion script was producing visibly off colors -- reds appearing orange, blues going purple. <code>TFT_eSPI</code> expects RGB565 values with swapped bytes, and the script wasn't doing that. One extra step (Claude) in the conversion fixed it.
          </p>
          <p>
            The enclosure is the honest gap in this project. I'd never used 3D printing software before and my attempts were for naught. I didn't have time to fabricate one, so both boards are bare. The software is complete, but the physical experience is pretty far from what I had in mind originally. I believe given the time constraints and the time of year this was done in (finals), if I had worked with another person or had more time I could have created an enclosure.
          </p>

          <h2>Reflection</h2>
          <p>
            This was probably my favorite project of the semester to actually build, mostly because the technical side had a clear creative reason behind it. The stat stages and type system weren't necessarily required, but leaving them out would have made the battles feel arbitrary. Having them in means that what happens on screen is the result of decisions made across multiple turns, which is the part that makes it feel like something cool rather than *just* a tech demo.
          </p>
        </>
      ),
    },
    {
      slug: "mta-pachinko",
      title: "mta pachinko",
      date: "2026-04-26",
      description: "A runtime-monitored pachinko machine themed around the New York City subway system. Three ESP32s coordinate over ESP-NOW to detect ball distribution imbalance across five chutes and physically redirect falling balls using stepper motor arms -- moving more sporadically as your score climbs.",
      tags: ["ESP32", "ESP-NOW", "RTLola", "stepper motors", "physical computing"],
      imageUrl: mtaDuringDemoStill,
      content: (
        <>
          <p className="font-mono text-[11px] text-primary/70 tracking-tight lowercase mb-8">
            // group project members: Lucia Chen, Siying Ding, Tramy Dong, Zoe Homan, Abby Neate, Linda Tang, and Kate Harris (me)
          </p>
          <p className="font-mono text-[11px] text-primary/70 tracking-tight lowercase mb-8">
            // no github repo available as it is private and contains sensitive information for ESP-NOW that shouldn't be publicly accessible
          </p>

          <h2>Concept</h2>
          <p>
            The MTA theme came together pretty naturally. We wanted something with a New York identity, and the subway's map having so many paths/dots (stops) lends itself well to a pachinko-type design. The five scoring chutes follow a classic pyramid style: 50, 100, 200, 100, 50 points, and the center chute is supposed to be the hardest to land (and most rewarding).
          </p>
          <p>
            The core mechanic is that the machine fights back. Two stepper motor arms sit mid-board and physically deflect balls in real time based on where previous balls have landed. If too many balls are piling into the high-value center chute, the arms are supposed to redirect traffic away from it. And as your score grows, the behavior gets less rational and harder to anticipate.
          </p>
          <p>
            The runtime monitoring angle comes from RTLola, a stream-based specification language used in aerospace for monitoring complex systems in real time. We wrote a <code>.lola</code> spec that watches the ball distribution across all five chutes, detects rising-edge imbalance events, and fires triggers that would tell the motors when and how to adjust. The ball collector ESP32 also streams CSV data over USB serial so the RTLola interpreter on a laptop can verify the logic independently.
          </p>

          <h2>Hardware</h2>
          <ul>
            <li>3× LilyGO TTGO T-Display (ESP32)</li>
            <li>2× stepper motors + shaft couplers</li>
            <li>Plywood (to make the game board)</li>
            <li>3D printed 5-chute ball collector</li>
            <li>3D printed arms</li>
            <li>Copper tape (sensors)</li>
            <li>Wires</li>
          </ul>
          <table className="min-w-full text-sm font-mono border-t border-border/40 mt-4 mb-8">
            <thead>
              <tr className="text-primary/70 border-b border-border/40 text-left">
                <th className="py-2">Microcontroller</th>
                <th className="py-2">Role</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-border/10"><td className="py-2">Ball collector</td><td>Reads sensors, detects imbalance, broadcasts motor commands</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">Motor 0</td><td>Drives left deflector arm (chutes 0–1 vs. 2)</td></tr>
              <tr><td className="py-2">Motor 1</td><td>Drives right deflector arm (chutes 2 vs. 3–4)</td></tr>
            </tbody>
          </table>

          <h3>Sensor wiring (ball collector)</h3>
          <table className="min-w-full text-sm font-mono border-t border-border/40 mt-4 mb-8">
            <thead>
              <tr className="text-primary/70 border-b border-border/40 text-left">
                <th className="py-2">Chute</th>
                <th className="py-2">Points</th>
                <th className="py-2">GPIO</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-border/10"><td className="py-2">0 (leftmost)</td><td>50</td><td>13</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">1</td><td>100</td><td>17</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">2 (center)</td><td>200</td><td>25</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">3</td><td>100</td><td>26</td></tr>
              <tr><td className="py-2">4 (rightmost)</td><td>50</td><td>27</td></tr>
            </tbody>
          </table>
          <p>
            Each sensor is a copper tape circuit: one strip to the GPIO pin (pulled HIGH internally), one strip to GND. A ball bridging the gap pulls the pin LOW and triggers the ISR.
          </p>

          <h3>Motor wiring</h3>
          <table className="min-w-full text-sm font-mono border-t border-border/40 mt-4 mb-8">
            <thead>
              <tr className="text-primary/70 border-b border-border/40 text-left">
                <th className="py-2">Signal</th>
                <th className="py-2">GPIO</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-border/10"><td className="py-2">IN1</td><td>2</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">IN2</td><td>15</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">IN3</td><td>13</td></tr>
              <tr><td className="py-2">IN4</td><td>12</td></tr>
            </tbody>
          </table>

          <h2>System Design</h2>
          <p>
            Each board's role is baked in at compile time via PlatformIO environments -- <code>ball_collector</code>, <code>motor_0</code>, <code>motor_1</code> — so the same <code>motor_controller.cpp</code> file flashes correctly to either motor board just by switching the environment, with <code>MY_CHANNEL</code> injected as a build flag.
          </p>
          <p>
            The ESP-NOW protocol is designed so each motor only acts on commands meant for it. We added a <code>GAME_ID</code> string (<code>"MTA_PACHINKO_42"</code>) as a first-field check so other groups' ESP-NOW traffic in the same room wouldn't interfere.
          </p>
          <p>
            The motor angle computation lives entirely on the ball collector side. It computes <code>target_angle[0]</code> and <code>target_angle[1]</code> before broadcasting, so the motor boards just execute whatever angle they receive. A score-based multiplier ramps the response from 1× at the start of the game to 3.5× at high scores, and a jitter term grows proportionally — so early on the arms make small, rational corrections, and later they become genuinely unpredictable.
          </p>
          <p>
            We also wrote a Python simulation (<code>sim/simulate.py</code>) that runs the full algorithm without any hardware — ball generation, imbalance detection, angle computation, score scaling — which was helpful to determine if the issue in our project was the code or the hardware.
          </p>
          <ProjectMedia
            src={mtaPythonSim}
            alt="Python simulation of the pachinko algorithm"
            caption="The Python sim running the full algorithm — ball generation, imbalance detection, and motor angle computation without any hardware."
            variant="below"
            aspect="video"
          />

          <h2>Build</h2>
          <ProjectMedia
            src={mtaDuringDemo}
            alt="MTA Pachinko demo"
            caption="Demo of the machine during the final showcase."
            variant="below"
            aspect="video"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8 items-start">
             <ProjectMedia
              src={mtaBoardCut}
              alt="Board cut with 3D printed chute collector"
              caption="The arched plywood board right after cutting, with the 3D printed 5-chute ball collector being held at the bottom."
              variant="below"
              aspect="video"
              className="my-0"
            />
            <ProjectMedia
              src={mtaDesignDraft}
              alt="Early design draft with MTA token layout"
              caption="Early design mock showing the subway line icon placement and nail positions."
              variant="below"
              aspect="video"
              className="my-0"
            />

          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8 items-start">
            <ProjectMedia
              src={mtaDryingRack}
              alt="Board drying on rack after painting"
              caption="The board drying after painting. The nail placement was planned around the icon positions."
              variant="below"
              aspect="video"
              className="my-0"
            />
            <ProjectMedia
              src={mtaSecuredSiderails}
              alt="Secured side rails"
              caption="White painted side rails screwed to the board edges to contain the balls."
              variant="below"
              aspect="video"
              className="my-0"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8 items-start">
            <ProjectMedia
              src={mtaChuteWiring}
              alt="Chute collector wiring"
              caption="The back of the 3D printed chute collector with the sensor wires routed through the integrated holes."
              variant="below"
              aspect="video"
              className="my-0"
            />
            <ProjectMedia
              src={mtaWiringDone}
              alt="Completed wiring of the chute collector"
              caption="Completed wiring on the back of the chute collector."
              variant="below"
              aspect="video"
              className="my-0"
            />
            <ProjectMedia
              src={mtaBallCollectorESP32}
              alt="Ball collector ESP32 showing score: 0"
              caption="The TTGO T-Display running the ball collector firmware, showing the score display and live per-channel counts."
              variant="below"
              aspect="video"
              className="my-0"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8 items-start">
            <ProjectMedia
              src={mtaBackOfBoard}
              alt="Back of the finished board"
              caption="The back of the finished board, showing how the wiring and ESP32s are mounted."
              variant="below"
              aspect="video"
              className="my-0"
            />
            <ProjectMedia
              src={mtaDuringDemoStill}
              alt="During demo day"
              caption="The board during demo day -- MTA tokens as pegs, the motor arm visible mid-board."
              variant="below"
              aspect="video"
              className="my-0"
            />
          </div>

          <h2>What Didn't Work</h2>
          <p>
            The copper tape sensors never reliably triggered during the demo. Our best guess is a wiring issue. Since the circuit depends on a ball bridging two strips to pull a GPIO pin LOW, something in the chain wasn't making consistent contact. The motors had nothing to respond to, and even just trying to get a print from the chute collecting ESP32 without communicating via ESP-NOW was fruitless. The only thing that registered as "scoring" a point was when any wire was plugged into and then pulled out of the peg in the breadboard connected to GND.
          </p>
          <p>
            The motors themselves were also an issue on demo day -- the motors were spinning, but the shaft couplers must've shifted in transport, so the physical arms were no longer turning with them. These components had been working correctly the previous night and that morning, which was frustrating. The motor code itself was verified working with a standalone test sketch, and the ESP-NOW broadcast logic was sound -- the mechanical connection between the motor shaft and the arm just didn't survive being moved.
          </p>
          <p>
            So in a way we had two separate failure points: the sensor circuit never feeding data in, and the physical coupling not translating motor movement into arm movement.
          </p>

          <h2>Reflection</h2>
          <p>
            This was probably the most complex project we've worked on in this class in terms of coordination and moving parts. We had three ESP-32s with different roles, a shared wireless protocol, and a physical machine all built simultaneously across a team of seven. We are genuinely proud of our effort and what got to work, though. The error was localized to one physical interface that we ran out of time to properly debug.
          </p>
          <p>
            The board looks great though. The MTA theming came together better than we had expected!
          </p>
        </>
      ),
    },
    {
      slug: "sprawl",
      title: "sprawl",
      date: "2026-04-05",
      description: "A capacitive touch instrument built on the ESP32 TTGO T-Display, inspired by William Gibson's Neuromancer. Five copper-tape pads stream touch data over USB to a browser interface that generates sound and visuals in real time via Web Serial and Web Audio.",
      tags: ["ESP32", "web audio", "web serial", "capacitive touch", "generative art", "instrument"],
      imageUrl: sprawlHero,
      content: (
        <>
          <p className="font-mono text-[11px] text-primary/70 tracking-tight lowercase mb-8">
            // for the technical details and to run it yourself: <a href="https://github.com/Kysariin/neuromancer" target="_blank" className="hover:underline text-primary">github.com/Kysariin/neuromancer</a>
          </p>
          <h2>Concept</h2>
          <p>
            sprawl is a capacitive touch instrument that bridges physical hardware and browser-based audiovisuals, inspired by William Gibson's <em>Neuromancer</em> -- specifically his vision of cyberspace as "a consensual hallucination" and a colorless void of cascading silver-white light as well as the ICE (Intrusion Countermeasures Electronics) in cyberpsace. The name is a nod to the Sprawl trilogy, and essentially the entire project pulls from Gibson's world.
          </p>
          <p>
            Five copper-tape pads connect to the ESP32's touch GPIO pins and stream capacitive readings. A browser page reads that data via the Web Serial API, then uses the Web Audio API and Canvas 2D to generate sound and visuals in real time.
          </p>
          <p>
            There are two modes. Mode 0 is the Matrix. Audibly, it's a bed of sustained drone oscillators tuned to A minor pentatonic. Visually, I wanted to stick to Gibson's actual description of cyberspace as a colorless, infinite void, so it's entirely silver data rain, scan beams, and spinning wireframes over a stark grid. Mode 1 is the ICE. Hitting a pad triggers a distorted percussion hit alongside neon geometry, flying shards, and an oscilloscope. Holding the pad past 350ms crossfades the impact into a sustained bandpass tone.          </p>

          <h2>Demo</h2>
          <div className="relative w-full aspect-video my-8 border border-border/40 rounded-md overflow-hidden bg-card/30">
            <iframe
              src="https://www.youtube.com/embed/jqT7wY5lMDU"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              className="absolute top-0 left-0 w-full h-full"
              title="sprawl. extended play"
            ></iframe>
          </div>
          <div className="relative w-full aspect-video my-8 border border-border/40 rounded-md overflow-hidden bg-card/30">
            <iframe
              src="https://www.youtube.com/embed/PQixQ9UT3OI"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              className="absolute top-0 left-0 w-full h-full"
              title="sprawl. demo"
            ></iframe>
          </div>

          <h3>Hardware</h3>
          <ul>
            <li>TTGO T-Display (ESP32 with built-in 240×135 TFT)</li>
            <li>4 instrument pads + 1 mode-switch pad (copper tape)</li>
            <li>Breadboard for organizing connections</li>
            <li>USB-C data cable</li>
            <li>Vessel for housing the ESP32 and pads</li>
          </ul>

          <table className="min-w-full text-sm font-mono border-t border-border/40 mt-4 mb-8">
            <thead>
              <tr className="text-primary/70 border-b border-border/40 text-left">
                <th className="py-2">Pad</th>
                <th className="py-2">Function</th>
                <th className="py-2">Touch Channel</th>
                <th className="py-2">GPIO</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-border/10"><td className="py-2">0</td><td>Instrument</td><td>T8</td><td>33</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">1</td><td>Instrument</td><td>T5</td><td>12</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">2</td><td>Instrument</td><td>T4</td><td>13</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">3</td><td>Instrument</td><td>T7</td><td>27</td></tr>
              <tr><td className="py-2">4</td><td>Mode Switch</td><td>T2</td><td>2</td></tr>
            </tbody>
          </table>

          <h3>Modes</h3>
          <table className="min-w-full text-sm font-mono border-t border-border/40 mt-4 mb-8">
            <thead>
              <tr className="text-primary/70 border-b border-border/40 text-left">
                <th className="py-2">Mode</th>
                <th className="py-2">Audio</th>
                <th className="py-2">Visuals</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-border/10">
                <td className="py-2">0 — DRONE</td>
                <td>Sustained oscillators tuned to A minor pentatonic. Multiple pads build a chord. The filter opens the longer you hold.</td>
                <td>Silver data rain, spinning polygons, scan beams, a grid.</td>
              </tr>
              <tr>
                <td className="py-2">1 — RHYTHM</td>
                <td>Distorted percussive hit on contact. Hold past 350ms and a sustained bandpass tone fades in.</td>
                <td>Neon ICE geometry, expanding polygon ripples, flying shards, oscilloscope.</td>
              </tr>
            </tbody>
          </table>

          <h3>Build</h3>
          <ProjectMedia
            src={sprawlHero}
            alt="sprawl. hero shot"
            caption="The finished instrument -- copper tape pads wired to the ESP32 TTGO T-Display, housed in its vessel."
            variant="below"
            aspect="video"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8 items-start">
            <ProjectMedia
              src={sprawlCarve}
              alt="Carving the vessel"
              caption="Carving out the vessel to house the ESP32 and route the pad wires."
              variant="below"
              aspect="video"
              className="my-0"
            />
            <ProjectMedia
              src={sprawlInterior}
              alt="Interior of the vessel"
              caption="Interior view showing how the ESP32 and wiring sit inside the enclosure."
              variant="below"
              aspect="video"
              className="my-0"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8 items-start">
            <ProjectMedia
              src={sprawlSolder}
              alt="Soldering connections"
              caption="Soldering the pad wires to the GPIO pins."
              variant="below"
              aspect="video"
              className="my-0"
            />
            <ProjectMedia
              src={sprawlESP32}
              alt="ESP32 TTGO T-Display"
              caption="The ESP32 TTGO T-Display -- the TFT shows the active mode and pad states."
              variant="below"
              aspect="video"
              className="my-0"
            />
          </div>

          <h3>Keyboard Fallback</h3>
          <p>
            As a fallback, keys ASDF trigger pads 0–3, and G switches modes. It is not as encouraged, though, as I did not replicate the reactivity/varying levels in the keyboard version.</p>
        </>
      ),
    },
    {slug: "disorder",
      title: "(dis)order",
      date: "2026-03-01",
      description: "A program for an ESP32 microcontroller that combines generative wave art with time-synchronized lyrics to visualize Joy Division's Unknown Pleasures album while Disorder's lyrics pan across the screen.",
      tags: ["ESP32", "generative art", "music", "visualization"],
      imageUrl: disorderGIF,
      content: (
        <>
        <p className="font-mono text-[11px] text-primary/70 tracking-tight lowercase mb-8">
          // click here for the github: <a href="https://github.com/Kysariin/-dis-order" target="_blank" className="hover:underline text-primary">github.com/Kysariin/-dis-order</a>
        </p>
        <h2>Concept</h2>
        <p>
          (dis)order is a generative art project that visualizes Joy Division's iconic album "Unknown Pleasures" while synchronizing the lyrics of the song "Disorder" 
          across the screen. The program runs on an ESP32 microcontroller, using a combination of generative wave patterns and text rendering to create a dynamic 
          experience that pays homage to the band's post-punk sound.
        </p>
        <p>
          I thought of this concept almost immediately after the assignment was introduced. I have always loved Joy Division -- attributing a lot of my music taste to them (and my parents
          for playing them around the house) and the post-punk/goth scene in general. I wanted to create a project that combined my love for music and technology, and this felt like a great opportunity
          to bridge the two.
        </p>
        <h2>Installation</h2>
        
        <div className="relative w-full aspect-video my-8 border border-border/40 rounded-md overflow-hidden bg-card/30">
          <iframe
            src="https://player.vimeo.com/video/1169408407?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute top-0 left-0 w-full h-full"
            title="(dis)order Exhibition Video"
          ></iframe>
        </div>
        <p>
          Due to unforeseen circumstances completely out of my control, I was not able to be part of the physical installation with the rest of my class, which pushed me to improvise my own "installation."
          The video portrays my ESP32 affixed to the front of my "Unknown Pleasures" t-shirt, allowing the viewer to see the dynamic, living waves operating against the static, mass-market print. 
        </p>
        <p>
          While the entire album is incredible, I specifically picked "Disorder" because I found myself amused by the irony of the song's title in relation to the nature of the project. Embedded programming
          is inherently intentional, mathematical, and orderly, yet the song's title is an antonym of that. The opening lines also played a role in me choosing this song: "I've been waiting for a guide to come
          and take me by the hand / Could these sensations make me feel the pleasures of a normal man?""
        </p>
        <p>
            The "guide" in this case could be me, the creator of the program. Despite thte lyrics expressing a desire to feel the "pleasures of a normal man," the ESP32 is a machine bound entirely by logic, 
            executing a calculation of a performance, created by a human, rather than actually experiencing it. However, this illusion of perfect control is unintentionally broken at the very end of my video. The
            hardware accidentally detaches from the fabric and falls out of the frame -- an unscripted hardware failure that could act as a literal manifestation of "disorder," introducing physical chaos into an
            otherwise very calculated system.
        </p>
        <h3>Hardware</h3>
        <p>
          The project was uploaded to a LILYGO ESP32 microcontroller, powered by either a battery (connected on the back) or USB-C, depending on the situation.
        </p>
        <ProjectMedia
            src={disorderThumb}
            alt="Still image of (dis)order displaying the waves and the band title"
            caption="Still image of (dis)order displaying the waves and the band title"
            variant="below"
            aspect="video"
          />
        <h3>Difficulties</h3>
        <p>
          Working with embedded hardware requires balancing artistic intent with strict computational limits. One of the first issues I ran into -- and one that others working with TFT displays likely encountered -- was a 
          severe strobe and flickering effect. Plus, drawing many calculated lines directly to the screen frame-by-frame is simply too slow. To fix this, I researched and figured out how to implement a double-buffering system using the 
            <code>TFT_eSprite</code> library. This is like an off-screen canvas where the wave is drawn first, and then pushed to the physical screen instantly. While this "costs more," it is a necessary trade-off for a clean, flicker-free visual.
        </p>
        <p>
          Another major hurdle was achieving true randomness. Despite calculating randomly, my microcontroller's waves seemed to be the same every time. Initially, my generative art was acting like a pre-recorded GIF, drawing the exact same mountain 
          peaks every time I plugged it in. To fix this, I programmed the board to read the voltage from an unconnected analog pin (<code>analogRead(0)</code>) on startup. Since the pin is empty, it is like a tiny antenna that picks up stray electromagnetic 
          static from around. Feeding that environmental noise into the random seed ensures that the waves are genuinely unique and generative every single time the piece is turned on.
        </p>
        </>
      )
    },
    {
      slug: "heart",
      title: "heArt",
      date: "2026-02-11", 
      description: "A custom heart-shaped PCB designed for Creative Embedded Systems. Afixed to it is a 555 LED timer that (should) blink red.",
      tags: ["pcb design", "milling", "kicad", "fabrication", "soldering"],
      imageUrl: heartVideo,
      content: (
        <>
          <p className="font-mono text-[11px] text-primary/70 tracking-tight lowercase mb-8">
            // click here for the PCB files: <a href="https://github.com/Kysariin/COMS3930_PCB" target="_blank" className="hover:underline text-primary">github.com/Kysariin/COMS3930_PCB</a>
          </p>
          <h2>Concept</h2>
          <p>
            "heArt" is a custom heart-shaped PCB designed for a Valentine’s-adjacent deadline, though its wiring initially attempted a deeper thematic 
            connection. As someone minoring in East Asian Studies, I originally intended to incorporate the kanji for "love" (愛) into the circuit layout. When the 
            complex strokes proved seemingly impossible to route cleanly, I shifted to a stylized "A" formation -- a nod to the kanji’s romanization, <i>ai</i>.
          </p>
          <p>
            While the traces don't strictly reflect this "A," the component placement does: the battery forms the tip of the A, the timer chip acts as the horizontal 
            bar, and the resistors/capacitors/LED create the diagonals (except for C2, which had to be moved for trace purposes). This deviation from my original plan 
            feels like an apt metaphor for the unpredictability of love and how it rarely fits into neat, preconceived structures.
          </p>
          <p>
            The "A" in the title being capitalized is of course a nod to the kanji's romanization. "Love" (the capital "A" based on <i>ai</i>/愛) being at the legitimate center 
            of the word is a happy coincidence that I like to think adds to the title's meaning, even if it was not intentional.
          </p>

          <h3>Hardware</h3>
          <ul>
            <li><strong>Power:</strong> 3V CR2032 Coin Cell</li>
            <li><strong>Logic:</strong> TLC555xP Timer Chip</li>
            <li><strong>(Intended) Pulse:</strong> ~2.03 Hz Frequency</li>
            <li><strong>Material:</strong> Copper board</li>
          </ul>

          <h3>Assembly & Fabrication</h3>
          <p>
            The board outline was imported from an .svg file online, and I used KiCad to design the traces and component placements. 
            I had to iterate quite a bit to get the trace routing right, especially given the heart shape (and attempts to follow the "A" concept).
            The PCB was both milled and soldered in the PL Lab.
          </p>
          <p>
            Despite being very thorough in ensuring the correct resistors and the correct capacitors were in the correct positions, for some reason my
            LED currently just lights up, without any blinking behavior. Most likely there is a short somewhere in the traces, but despite carefully chipping
            away at any solder bridges I could find, I haven't been able to fix it yet. In addition to the closeness of pins and pads, my fine motor skills 
            were not the best on the day of soldering due to Tourette's, but I am glad I got it to at least power on!! 
          </p>

          <h3>Bill of Materials</h3>
          <table className="min-w-full text-sm font-mono border-t border-border/40 mt-4">
            <thead>
              <tr className="text-primary/70 border-b border-border/40 text-left">
                <th className="py-2">Component</th>
                <th className="py-2">Label</th>
                <th className="py-2">Value</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-border/10">
                <td className="py-2">Timer Chip</td>
                <td>U1</td>
                <td>TLC555xP</td>
              </tr>
              <tr className="border-b border-border/10">
                <td className="py-2">Resistor 1</td>
                <td>R1</td>
                <td>4.7 kΩ</td>
              </tr>
              <tr className="border-b border-border/10">
                <td className="py-2">Resistor 2</td>
                <td>R2</td>
                <td>33 kΩ</td>
              </tr>
              <tr className="border-b border-border/10">
                <td className="py-2">Resistor 3</td>
                <td>R3</td>
                <td>470 Ω</td>
              </tr>
              <tr className="border-b border-border/10">
                <td className="py-2">Capacitor 1</td>
                <td>C1</td>
                <td>10 µF</td>
              </tr>
              <tr className="border-b border-border/10">
                <td className="py-2">Capacitor 2</td>
                <td>C2</td>
                <td>10 nF</td>
              </tr>
              <tr>
                <td className="py-2">Red LED</td>
                <td>D1</td>
                <td>LED</td>
              </tr>
            </tbody>
          </table>

          <h3>Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <ProjectMedia 
              src={heartSchematic} 
              alt="heArt Schematic" 
              caption="The 555 timer circuit schematic in KiCad."
              className="my-0"
            />
            <ProjectMedia 
              src={heartPCBeditor} 
              alt="heArt PCB Editor" 
              caption="Routing the traces within the heart edge-cuts."
              className="my-0"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12 items-start">
            <ProjectMedia 
              src={heartPostMill}
              alt="heArt after the milling process"
              caption="heArt after the milling process, before soldering."
              variant="below"
              aspect="video"
              className="my-0"
            />
            <ProjectMedia
              src={heartMap}
              alt="heArt soldering map"
              caption="My soldering map (drawn in Procreate) to make sure I soldered the right value components in the right places."
              variant="below"
              aspect="video"
              className="my-0"
            />
            <ProjectMedia
              src={heartMidSolder}
              alt="heArt mid-soldering"
              caption="heArt mid-soldering. Some traces/pads were really close!"
              variant="below"
              aspect="video"
              className="my-0"
            />
          </div>
          <ProjectMedia
            src={heartLightStill}
            alt="heArt lit up"
            caption="heArt lit up! Unfortunately it just stays on without blinking, likely due to a short somewhere in the traces that I haven't been able to find yet."
            variant="below"
            aspect="video"
            className="my-0"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12 items-start">
            <ProjectMedia
              src={heartCloseup}
              alt="Closeup of the center of heArt"
              caption="Closeup of the center of heArt, showing the battery, timer chip, and some of the traces."
              variant="below"
              aspect="video"
              className="my-0"
            />
            <ProjectMedia
              src={heartLeftCloseup}
              alt="Closeup of the left side of heArt"
              caption="Closeup of the left side of heArt, showing R1 and R2."
              variant="below"
              aspect="video"
              className="my-0"
            />
            <ProjectMedia
              src={heartRightCloseup}
              alt="Closeup of the right side of heArt"
              caption="Closeup of the right side of heArt, showing R3, C1, C2, and the LED."
              variant="below"
              aspect="video"
              className="my-0"
            />
          </div>
        </>
      ),
    },
    {
      slug: "g0ngsh1",
      title: "g0ngsh1",
      date: "2026-01-27",
      description: "Assignment for Creative Embedded Systems -- solder a 12-pin header and a bent brass rod to a protoboard.",
      tags: ["soldering", "sculpture", "components"],
      imageUrl: g0ngsh1HeroImage,
      content: (
        <>
          <h2>Concept</h2>
          <p>
            Last week in my Introduction to East Asian Art class, we briefly 
            discussed <a href="https://www.google.com/search?q=china+dolmens" target="_blank">dolmens</a> in China, which led me to read more about them. 
            That research eventually brought me to <a href="https://en.wikipedia.org/wiki/Suiseki" target="_blank">suiseki</a>/<a href="https://en.wikipedia.org/wiki/Chinese_scholar%27s_rocks" target="_blank">gongshi,</a> or scholar’s 
            rocks (viewing stones). I thought it would be interesting to base this 
            technically modern project off of such a natural kind of art, which is 
            meant to echo the precarious, almost impossible balance often seen in 
            these formations.
          </p>
          <p>  
            The brass rod at the top of the sculpture follows two distinct paths. I 
            interpret these as people beginning in different places and moving through 
            unique journeys, yet ultimately arriving where they are meant to be. 
            The point at which the paths intersect represents this shared, 
            “destined” endpoint.
          </p>
          <p>
            The title g0ngsh1 references the Chinese term for scholar’s rocks. 
            Replacing the vowels with numbers serves as a nod to the technological 
            materials used in the piece, despite its inspiration's roots being in entirely 
            natural forms.
          </p>
          <h3>Hardware</h3>
          <ul>
            <li>Brass rod</li>
            <li>10-pin header</li>
            <li>Protoboard</li>
            <li>Soldering iron</li>
          </ul>
          
          <h3>Details</h3>
          <ProjectMedia 
            src={g0ngsh1BaseImage}
            alt="Bottom of the sculpture"
            caption="Bottom of the sculpture/protoboard. It was very difficult to get the brass to bend the way I wanted it to at the correct height (to reduce unevenness when it stood), hence the pretty messy brass rod paths."
            variant="below"
            aspect="video"
          />
          <ProjectMedia
            src={g0ngsh1TopImage}
            alt="Top of the sculpture"
            caption="Top of the sculpture/protoboard. The top was intended to look more flowing, which is why both paths have a similar, but different, curve."
            variant="below"
            aspect="video"
          />
          <ProjectMedia
            src={g0ngsh1HeaderImage}
            alt="Pin header of the sculpture"
            caption="Pin header of the sculpture/protoboard. I had never soldered anything before, so this was definitely a learning curve!"
            variant="below"
            aspect="video"
          />
          <ProjectMedia
            src={g0ngsh1SolderBImage}
            alt="Soldering bottom of the sculpture"
            caption="Soldering bottom of the sculpture. Trying to hold the ends of the brass rod together made it pretty difficult, resulting in lots of solder being used here..."
            variant="below"
            aspect="video"
          />
          <ProjectMedia
            src={g0ngsh1SolderTImage}
            alt="Soldering top of the sculpture"
            caption="Soldering top of the sculpture. Similar issue, but a bit less egregious. The intent was for them to diverge on the same spot, but with the finickiness of the brass rod staying in place as I solder, I couldn't pull it off."
            variant="below"
          />
        </>
      ),
    },
  ],
  sound: [
    {
      slug: "utagoe",
      title: "utagoe",
      date: "2026-05-11",
      description:
        "A browser-based formant synthesis engine that takes Japanese syllables in romaji and a melody in note names, and produces a synthetic voice that sings them.",
      tags: [
        "web audio",
        "formant synthesis",
        "speech synthesis",
        "javascript",
        "computational sound",
      ],
      imageUrl: utagoeHeroImage,
      content: (
        <>
          <p className="font-mono text-[11px] text-primary/70 tracking-tight lowercase mb-8">
            // source: <a href="https://github.com/Kysariin/utagoe_synthesizer" target="_blank">github.com/Kysariin/utagoe_synthesizer</a>
          </p>

          <h2>Concept</h2>
          <p>Earlier in the semester, a Hatsune Miku song showed up on the lecture slides. I have been listening to Vocaloid for over ten years, so seeing it in an academic context was genuinely exciting. When the free-choice final project was announced, I knew immediately what I wanted to build.</p>
          <p>utagoe shinsesaizaa (歌声シンセサイザー, literally "singing voice synthesizer") is a browser-based formant synthesis engine that takes Japanese syllables in romaji and a melody in note names, and produces a synthetic voice that sings them.</p>
          <p>Vocaloid itself uses recordings of a real voice actress (Saki Fujita, in Miku's case) processed through Yamaha's proprietary engine. What I built is the older, more mathematical version of the same idea (the kind of synthesis that predates recorded voice banks). It sounds the way it sounds because I've discovered that formant synthesis is unfortunately hard, and the robotic quality is the honest result of building this from scratch in a browser. I have a lot more respect for the MacOS TTS I grew up hearing.</p>
          <p>I chose Japanese specifically because its phonetically much simpler than English. Five vowels that always sound the same, and almost every syllable is just a consonant followed by one of those five vowels. English would have been a nightmare.</p>

          <h2>Signal Chain</h2>
          <p>The synthesizer is built around the <strong>source-filter model of speech</strong>: the voice is produced by a buzzing source (vocal cords) shaped by a resonant filter system (vocal tract). Different vowel sounds come from different resonant peaks called formants.</p>
          <table className="min-w-full text-sm font-mono border-t border-border/40 mt-4 mb-8">
            <thead>
              <tr className="text-primary/70 border-b border-border/40 text-left">
                <th className="py-2">Component</th>
                <th className="py-2">WebAudio Node</th>
                <th className="py-2">Role</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-border/10">
                <td className="py-2">Glottal source</td>
                <td>
                  Custom <code>PeriodicWave</code> oscillator
                </td>
                <td>Approximates vocal cord vibration</td>
              </tr>
              <tr className="border-b border-border/10">
                <td className="py-2">Pre-emphasis</td>
                <td>
                  <code>BiquadFilter</code> (highshelf +8dB @ 1kHz)
                </td>
                <td>Compensates for source rolloff</td>
              </tr>
              <tr className="border-b border-border/10">
                <td className="py-2">Formant bank</td>
                <td>
                  4× <code>BiquadFilter</code> (bandpass) in parallel
                </td>
                <td>Shapes source into vowel sounds</td>
              </tr>
              <tr className="border-b border-border/10">
                <td className="py-2">Formant gains</td>
                <td>
                  4× <code>GainNode</code>
                </td>
                <td>Per-formant amplitude weighting</td>
              </tr>
              <tr className="border-b border-border/10">
                <td className="py-2">Dry mix</td>
                <td>
                  <code>GainNode</code>
                </td>
                <td>Preserves voice body between formant peaks</td>
              </tr>
              <tr className="border-b border-border/10">
                <td className="py-2">Noise source</td>
                <td>
                  <code>BufferSource</code> (white noise) →{" "}
                  <code>BiquadFilter</code>
                </td>
                <td>Fricatives and plosive bursts</td>
              </tr>
              <tr className="border-b border-border/10">
                <td className="py-2">Breath noise</td>
                <td>
                  <code>BufferSource</code> → highpass{" "}
                  <code>BiquadFilter</code>
                </td>
                <td>Continuous aspiration</td>
              </tr>
              <tr className="border-b border-border/10">
                <td className="py-2">Reverb</td>
                <td>
                  <code>ConvolverNode</code>
                </td>
                <td>Room ambience</td>
              </tr>
              <tr>
                <td className="py-2">Limiter</td>
                <td>
                  <code>DynamicsCompressor</code>
                </td>
                <td>Output ceiling</td>
              </tr>
            </tbody>
          </table>
          <p>
            Acoustically, formants
            are independent resonances that don't interact, so routing the
            source into each filter simultaneously and summing the outputs is
            the correct model. This was something I learned partway through the
            project; the first version used series peaking EQ filters and
            sounded much worse.
          </p>
          <p>
            The glottal source uses <code>createPeriodicWave</code> with
            harmonics falling at 1/n^1.2 — slightly flatter rolloff than a
            sawtooth (1/n) and closer to a real glottal pulse. Two detuned
            copies run in parallel at 1.000× and 1.004× the target pitch.
          </p>
          <p>
            There is also a <strong>voice mode</strong> that swaps the synthetic
            oscillator for a recorded vowel sample, pitch-shifted via{" "}
            <code>playbackRate</code> and run through the same formant filter
            chain.
          </p>

          <h2>Vowel Formant Targets</h2>
          <p>
            Five Japanese vowels, tuned for a bright feminine voice. Q values
            are frequency-dependent -- lower formants are broader, higher
            formants narrower.
          </p>
          <table className="min-w-full text-sm font-mono border-t border-border/40 mt-4 mb-8">
            <thead>
              <tr className="text-primary/70 border-b border-border/40 text-left">
                <th className="py-2">Vowel</th>
                <th className="py-2">F1</th>
                <th className="py-2">F2</th>
                <th className="py-2">F3</th>
                <th className="py-2">F4</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-border/10">
                <td className="py-2">/a/</td>
                <td>950 Hz</td>
                <td>1400 Hz</td>
                <td>2800 Hz</td>
                <td>3400 Hz</td>
              </tr>
              <tr className="border-b border-border/10">
                <td className="py-2">/i/</td>
                <td>300 Hz</td>
                <td>2800 Hz</td>
                <td>3400 Hz</td>
                <td>4000 Hz</td>
              </tr>
              <tr className="border-b border-border/10">
                <td className="py-2">/u/</td>
                <td>380 Hz</td>
                <td>950 Hz</td>
                <td>2800 Hz</td>
                <td>3400 Hz</td>
              </tr>
              <tr className="border-b border-border/10">
                <td className="py-2">/e/</td>
                <td>700 Hz</td>
                <td>2600 Hz</td>
                <td>3100 Hz</td>
                <td>3700 Hz</td>
              </tr>
              <tr>
                <td className="py-2">/o/</td>
                <td>550 Hz</td>
                <td>950 Hz</td>
                <td>2800 Hz</td>
                <td>3400 Hz</td>
              </tr>
            </tbody>
          </table>
          <p>
            Transitions between vowels are scheduled with{" "}
            <code>setTargetAtTime</code> at a time constant of 25ms. This is a
            simplified model of coarticulation, which is the way your mouth physically
            glides between phoneme positions rather than snapping.
          </p>

          <h2>Consonant Modeling</h2>
          <p>
            Going into this project I did not know what a fricative was. I came
            out understanding that consonants are primarily identified by how{" "}
            <strong>formants move</strong>, not by the sound of the consonant
            itself. Though I would still like to make sure Claude is properly credited, for this amount of work would be impossible for someone with as little knowledge going into this as I did.
          </p>
          <p>The system handles six consonant types:</p>
          <p>
            <strong>Plosives (/k/, /t/, /b/, /d/, /g/)</strong> -- silence
            during closure, broadband noise burst, then an F2 locus sweep at
            vowel onset. The F2 locus is the frequency F2 appears to originate
            from, which is the primary cue your brain uses to distinguish /k/
            from /t/ from /p/. /k/ has a low locus (800Hz), /t/ a higher one
            (1800Hz).
          </p>
          <p>
            <strong>Fricatives (/s/, /sh/, /h/)</strong> -- voice gates off,
            narrow-band noise takes over at the characteristic frequency of the
            fricative. /s/ is high and tight (6000Hz, Q=10), /sh/ is broader
            and lower (3200Hz, Q=7).
          </p>
          <p>
            <strong>Nasals (/m/, /n/)</strong> -- at singing pitch, nasal
            resonances are below the fundamental, so a direct acoustic model
            doesn't work. Instead: voice gates low to simulate lip closure,
            upper formants suppress, and F1+F2 sweep up from a bilabial release
            position at vowel onset (the same locus mechanism as plosives).
          </p>
          <p>
            <strong>Tap (/r/)</strong> -- Japanese /r/ is an alveolar tap [ɾ],
            not an English /r/. It's a 20ms tongue contact: a brief amplitude
            dip with a transient F1 lowering, then immediate vowel onset.
          </p>
          <p>
            <strong>Glides (/w/, /y/)</strong> -- fully voiced, F1 and F2 start
            at consonant positions and sweep into the vowel. /w/ starts both
            formants low (bilabial rounding), /y/ starts with low F1 and high
            F2 (the /i/ palatal position).
          </p>

          <h2>Features</h2>
          <ul>
            <li>Romaji syllable input with real-time per-syllable note grid</li>
            <li>
              Preloaded songs (World is Mine, Melt, Sakura, Rolling Girl,
              Twinkle Twinkle)
            </li>
            <li>Synth / Voice mode toggle</li>
            <li>Tempo control</li>
            <li>Real-time FFT spectrum visualizer showing formants</li>
            <li>
              Note grid highlights in sync with playback via{" "}
              <code>setTimeout</code> + AudioContext timeline
            </li>
          </ul>

          <h2>Demo</h2>
          <ProjectMedia
            src={utagoeUiImage}
            alt="utagoe synthesizer UI"
            caption="The utagoe interface — romaji input grid, note assignment, and real-time FFT spectrum visualizer."
            variant="below"
            aspect="video"
          />
          <div className="relative w-full aspect-video my-8 border border-border/40 rounded-md overflow-hidden bg-card/30">
            <iframe
              src="https://www.youtube.com/embed/GSddzD1q-Cs"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              className="absolute top-0 left-0 w-full h-full"
              title="utagoe demo"
            ></iframe>
          </div>

          <h2>What Didn't Work</h2>
          <p>
            <strong>Consonant intelligibility</strong> is the weakest part of
            the synthesizer. Fricatives and plosives are audible and
            distinguishable in controlled, VERY FOCUSED listening, but in a fast musical
            phrase they can blur. The core tension is that the voiced source is
            loud relative to the noise burst, so short consonants get masked. I
            spent a significant portion of this project debugging AudioParam
            scheduling conflicts -- <code>cancelAndHoldAtTime</code> is the
            correct call before rescheduling a parameter, not{" "}
            <code>cancelScheduledValues</code>, and getting that wrong causes
            subtle timing artifacts that are hard to trace.
          </p>
          <p>
            <strong>Nasals at high pitches</strong> never fully convinced me.
            At G#5 and above, the /m/ sounds more like a quiet onset
            than a genuine nasal murmur.
          </p>
          <p>
            <strong>Formant synthesis above C6</strong> is limited -- when the
            fundamental approaches F1, the filters can't independently shape the
            lower resonances and the voice loses definition. High notes sound
            progressively thinner and more flute-like rather than voice-like.
          </p>

          <h2>Reflections</h2>
          <p>
            The thing I expected to be the hard part -- getting vowels to sound
            like vowels -- turned out to be relatively doable once the
            parallel filter topology was in place. The thing I did not expect --
            consonant modeling -- was substantially harder and required learning a
            lot of phonetics I had no background in. It felt like harsh sounds would've been easier to make than sustained vowels.
          </p>
          <p>
            I also think formant synthesis is genuinely underrated as a browser
            audio project. The source-filter model connects directly to
            subtractive synthesis (the same conceptual model as filters shaping
            noise), the scheduling precision of the AudioContext timeline is
            essential and interesting to work with, and the output is weird
            enough to be compelling in its own right. It doesn't sound like
            Miku. One thing I'd really like to have added is a way to have rhythms. Right now every note plays for the same amount of time, and is very evenly distributed.
          </p>

          <h2>Related Work</h2>
          <p>
            <strong>Pink Trombone</strong> (Neil Thapen) -- articulatory vocal tract synthesizer in WebAudio, computes formants from physical geometry in real time rather than a lookup table. Much more continuous and natural-sounding. Designed for gestural control rather than sequenced output.
          </p>
          <p>
            <strong>meSing</strong> (David Su) -- runs text-to-speech through a
            WebAudio vocoder to impose pitch. Sidesteps synthesis entirely by
            starting with real speech. The architecture that meSing uses
            (cwilso's Vocoder) is worth reading if you want to understand what a
            different approach to the same problem looks like.
          </p>
          <p>
            <strong>Sinsy / NNSVS / DiffSinger</strong> -- statistical and
            neural network-based singing synthesis. Dramatically better output,
            but not easily deployable in a browser without WebAssembly
            compilation.
          </p>
        </>
      ),
    },
    {
      slug: "seance",
      title: "séance",
      date: "2026-04-25",
      description: "A Markov chain composition engine trained on twenty gothic rock, darkwave, and post-punk MIDI files. Generates and plays infinite original melodies by learning transition probabilities between notes across artists like Bauhaus, Joy Division, The Cure, and Depeche Mode.",
      tags: ["web audio", "markov chain", "algorithmic composition", "music", "javascript"],
      imageUrl: seanceScreenImage,
      content: (
        <>
          <p className="font-mono text-[11px] text-primary/70 tracking-tight lowercase mb-8">
            // for the technical details and to run it yourself: <a href="https://github.com/Kysariin/seance" target="_blank" className="hover:underline text-primary">github.com/Kysariin/seance</a>
          </p>

          <h3>
            <a href="https://kysariin.github.io/seance/" target="_blank">LAUNCH SÉANCE</a>
          </h3>

          <h2>Concept</h2>
          <p>
            I wanted to do something related to gothic music. I wanted to feed songs I like into an algorithm, and see what gets summoned. That's a séance.
          </p>
          <p>
            These are bands I actually listen to. Joy Division is already in my portfolio via <a href="/project/disorder">(dis)order</a>. Bauhaus, The Cure, Depeche Mode, Siouxsie are all bands that my parents played for me my whole life. I wanted to know what a Markov chain trained on all of it would produce. I hoped it would make something that sounds like it comes from the same emotional world, but doesn't belong to any one artist.
          </p>

          <h2>Corpus Extraction</h2>
          <p>
            The first problem was getting note data out of MIDI files without a runtime MIDI parser in the browser. I (and Claude, as I've never done this extraction before) wrote <code>extract_corpus.py</code> using <code>mido</code> -- it parses each MIDI file, filters out drum tracks, picks the best melodic track by note density, and extracts a flat sequence of MIDI note numbers. The output gets baked directly into <code>corpus.js</code> as hardcoded JavaScript arrays. This doesn't allow for customization for the end-user, but downloading the repo will allow more customization. This was a goth-related project, so I wanted to have the corpus baked in already.
          </p>
          <p>
            Twenty songs went in. The chain trains on all of them at once, and it doesn't know that note 60 came from "Bela Lugosi's Dead" versus "Disintegration." It only knows what came after it.
          </p>

          <h2>The Chain</h2>
          <p>
            <code>buildChain()</code> scans every sequence and builds a transition probability table. For 2nd order, the state is the last two notes joined as a string key (e.g., <code>"60,64"</code>) and each row is normalized to probabilities. <code>generate()</code> seeds from a random window in the corpus and probabilistically samples the next note. Dead-end states fall back to a random note from the vocabulary. Output plays in chunks of 128 notes, looping until stopped.
          </p>

          <h2>Order vs. Creativity</h2>
          <p>
            The most interesting thing I learned implementing this was that there's a tension between order and creativity in Markov chains.
          </p>
          <table className="min-w-full text-sm font-mono border-t border-border/40 mt-4 mb-8">
            <thead>
              <tr className="text-primary/70 border-b border-border/40 text-left">
                <th className="py-2">Order</th>
                <th className="py-2">State</th>
                <th className="py-2">Result</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-border/10"><td className="py-2">1st</td><td>1 previous note</td><td>Random and surprising -- melodically incoherent, could go anywhere</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">2nd</td><td>2 previous notes</td><td>The sweet spot in my opinion -- feels genuinely new but has the same vibe</td></tr>
              <tr><td className="py-2">3rd</td><td>3 previous notes</td><td>Starts replaying fragments of the originals -- more accurate, BUT less original</td></tr>
            </tbody>
          </table>
          <p>
            2nd order is where séance lives. The higher the order, the more the chain "remembers," and eventually it stops composing and starts reciting. More context means more coherent output, right up until it's just retrieval.
          </p>

          <h2>Audio</h2>
          <p>
            The Web Audio signal chain in <code>audio.js</code> is built to match the aesthetic. Each generated note plays through:
          </p>
          <ul>
            <li><strong>Sawtooth oscillator</strong> -- the darkest, most harmonically dense waveform. More darkwave-adjacent.</li>
            <li><strong>ADSR envelope</strong> -- shapes the attack, decay, sustain, and release so notes breathe rather than click on and off.</li>
            <li><strong>Lowpass filter</strong> -- eases the harshness of the sawtooth.</li>
            <li><strong>Feedback delay</strong> -- common in post-punk production.</li>
            <li><strong>Convolution reverb</strong> -- long and cavernous.</li>
          </ul>

          <h2>Training Corpus</h2>
          <table className="min-w-full text-sm font-mono border-t border-border/40 mt-4 mb-8">
            <thead>
              <tr className="text-primary/70 border-b border-border/40 text-left">
                <th className="py-2">Song</th>
                <th className="py-2">Artist</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-border/10"><td className="py-2">A Forest</td><td>The Cure</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">Atmosphere</td><td>Joy Division</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">Bela Lugosi's Dead</td><td>Bauhaus</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">Black Celebration</td><td>Depeche Mode</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">Black No. 1</td><td>Type O Negative</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">Black Planet</td><td>Sisters of Mercy</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">Christian Woman</td><td>Type O Negative</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">Dark Entries</td><td>Bauhaus</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">Disintegration</td><td>The Cure</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">Hanging Garden</td><td>The Cure</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">In Your Room</td><td>Depeche Mode</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">It's a Sin</td><td>Pet Shop Boys</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">Join Me in Death</td><td>HIM</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">Killing Moon</td><td>Echo & the Bunnymen</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">Love Like Blood</td><td>Killing Joke</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">Not In Love (feat. Robert Smith)</td><td>Crystal Castles</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">Sacrifice</td><td>Depeche Mode</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">She Sells Sanctuary</td><td>The Cult</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">Spellbound</td><td>Siouxsie and the Banshees</td></tr>
              <tr><td className="py-2">Stripped</td><td>Depeche Mode</td></tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      slug: "babel",
      title: "babel",
      date: "2026-04-24",
      description: "A two-part exploration of sound synthesis in WebAudio: recreating a babbling brook from a SuperCollider one-liner, and building an R2D2 \"computer babble\" engine from Andy Farnell's Designing Sound.",
      tags: ["web audio", "FM synthesis", "subtractive synthesis", "sound design"],
      imageUrl: babelHero,
      content: (
        <>
          <p className="font-mono text-[11px] text-primary/70 tracking-tight lowercase mb-8">
            // click here for the github: <a href="https://github.com/Kysariin/lab3_compsound" target="_blank" className="hover:underline text-primary">github.com/Kysariin/lab3_compsound</a>
          </p>

          <h3>
            <a href="https://kysariin.github.io/lab3_compsound/babbling_brook.html" target="_blank">LAUNCH BABBLING BROOK</a>
            {" · "}
            <a href="https://kysariin.github.io/lab3_compsound/r2d2.html" target="_blank">LAUNCH R2D2</a>
          </h3>

          <h2>Concept</h2>
          <p>
            This lab was about learning to read and translate unfamiliar audio code, both literally (SuperCollider --{">"} WebAudio) and conceptually (Farnell's Pure Data patches --{">"} my own implementation). Part I is a direct translation exercise. Part II is sound design.
          </p>
          <p>
            I chose R2D2 for Part II because I was raised watching Star Wars and have always loved R2's sounds. It definitely proved to be difficult, but as if controlled by the Force, I felt compelled to pick it.
          </p>
          <p>
            The title is a nod to the Tower of Babel and languages becoming mutually unintelligible. R2D2 speaks a language the audience can't understand, the brook "babbles" nonsense, and the whole project involved translating between three programming languages (SuperCollider, Pure Data, WebAudio) that don't speak to each other directly.
          </p>

          <h2>Part I: Babbling Brook</h2>
          <p>The assignment gave us this SuperCollider one-liner to recreate in WebAudio:</p>
          <pre><code>{`{RHPF.ar(LPF.ar(BrownNoise.ar(), 400), LPF.ar(BrownNoise.ar(), 14) * 400 + 500, 0.03, 0.1)}.play`}</code></pre>
          <p>
            This is subtractive synthesis: start with noise that contains all frequencies, then use filters to carve it into something that sounds like water. Two independent noise sources do different jobs. One is the sound you actually hear (low-pass filtered below 400 Hz), and the other is a slow, random control signal that wobbles the filter's cutoff frequency back and forth. That wobble is what makes it sound like bubbling.
          </p>
          <p>
            The key WebAudio concept here is <code>.connect(param)</code> -- you can route one node's audio output into another node's setting (like its frequency). The incoming signal gets added to whatever value that setting already has. So I set the filter's base frequency to 500, and the wobble signal adds and subtracts from that as it fluctuates.
          </p>
          <h3>Tuning</h3>
          <p>
            My first version sounded flat. Two changes fixed it:
          </p>
          <ul>
            <li><strong>Resonance (Q) from 20 --{">"} 45:</strong> higher resonance makes the filter "ring" at its cutoff frequency, which is what produces the pitched bubble tones.</li>
            <li><strong>Modulation depth from 400 --{">"} 1500:</strong> the wobble signal was too quiet after filtering, so the cutoff was barely moving. Cranking the gain made it actually sweep through a wide range.</li>
          </ul>
          <p>Both were tuned by ear.</p>

          <h2>Part II: R2D2</h2>
          <h3>What Farnell says about R2D2</h3>
          <p>
            In <em>Designing Sound</em> (Practical 34), Farnell starts by observing that R2D2 sounds a lot like birdcall: pitch sweeps, modulation sweeps, breaks of continuous calling. He also hears similarities to the TB-303 (pitch slides, resonant filter). The actual R2D2 sounds were made by Ben Burtt on an ARP2600, mixed with water pipes, whistles, and his own vocalizations. Farnell's approach is making a synthesizer, and constantly randomizing everything about it. He calls his randomization logic a "random random number generator" because it first rolls dice to decide <em>whether</em> to roll dice.
          </p>
          <h3>How FM synthesis works</h3>
          <p>
            FM synthesis uses one oscillator (the modulator) to wobble another oscillator's (the carrier) frequency. If the wobble is slow, you hear it as vibrato. If it's fast (hundreds of Hz), your ear can't track individual wobbles. Instead, the sound gets richer and more complex, with new overtones appearing. Three things control the character: the carrier's frequency (what pitch you hear), the modulator's frequency (what kind of overtones appear), and the modulation index (how intense the wobbling is -- low = clean tone, high = harsh and glitchy).
          </p>
          <h3>Signal Flow</h3>
          <ProjectMedia
            src={babelGraph}
            alt="R2D2 WebAudio signal flow diagram"
            caption="R2D2 signal flow. Made with Claude from the original Chrome WebAudio inspector graph."
            variant="below"
            aspect="video"
          />
          <p>The architecture:</p>
          <ul>
            <li><strong>FM core:</strong> the modulator feeds through a gain node (the "index" knob) into the carrier's frequency setting -- the same <code>.connect(param)</code> trick as the brook.</li>
            <li><strong>Output chain:</strong> carrier --{">"} volume control --{">"} two highpass filters at 100 Hz --{">"} two lowpass filters at 7500 Hz --{">"} speakers. Two of each filter in series makes the cutoff sharper.</li>
            <li><strong>Analyser:</strong> runs before the speakers that feeds the waveform visualizer on the page.</li>
          </ul>
          <h3>The Randomizer</h3>
          <p>Every metronome tick, four parameters get independently updated:</p>
          <table className="min-w-full text-sm font-mono border-t border-border/40 mt-4 mb-8">
            <thead>
              <tr className="text-primary/70 border-b border-border/40 text-left">
                <th className="py-2">Parameter</th>
                <th className="py-2">Range</th>
                <th className="py-2">What it controls</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-border/10"><td className="py-2">Carrier frequency</td><td>200–2500 Hz</td><td>The pitch of each chirp</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">Modulator frequency</td><td>carrier × random(0–0.5)</td><td>The kind of overtones, tied to the carrier so it sounds coherent</td></tr>
              <tr className="border-b border-border/10"><td className="py-2">Modulation index</td><td>20–840</td><td>How intense/harsh each chirp is</td></tr>
              <tr><td className="py-2">Output amplitude</td><td>0–0.3</td><td>How loud each tick is</td></tr>
            </tbody>
          </table>
          <p>
            For each parameter, <code>pickAction()</code> rolls dice to decide: <strong>slide</strong> smoothly to a new value, <strong>jump</strong> instantly, or <strong>hold</strong> (do nothing this tick). The mix of all three behaviors happening independently across four parameters is what gives it variability.
          </p>
          <h3>What I changed from Farnell's patch</h3>
          <ul>
            <li><strong>Carrier range narrowed to 200–2500 Hz</strong> (Farnell used 100–9100 Hz). His full range goes uncomfortably high for sustained listening in a browser.</li>
            <li><strong>Lowpass filters at 7500 Hz instead of 10000 Hz</strong> -- similar reasoning to above.</li>
            <li><strong>Modulation index kept close to Farnell's range (20–840).</strong> He specifically recommends pushing it high to get that harsh, glitchy, metallic quality that makes it sound machinelike.</li>
            <li><strong>Slide/jump probabilities are user-adjustable via sliders.</strong> In Farnell's patch these are hardcoded. Making them adjustable lets you hear how the probabilities change R2's "personality" in real time.</li>
            <li><strong>Added a waveform visualizer.</strong> An AnalyserNode taps the signal before the speakers and draws to a canvas at 60fps. You can actually see the modulation index changing.</li>
          </ul>

          <h2>Two Approaches to Synthesis</h2>
          <table className="min-w-full text-sm font-mono border-t border-border/40 mt-4 mb-8">
            <thead>
              <tr className="text-primary/70 border-b border-border/40 text-left">
                <th className="py-2"></th>
                <th className="py-2">Part I (brook)</th>
                <th className="py-2">Part II (R2D2)</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr className="border-b border-border/10"><td className="py-2 text-primary/70">Approach</td><td>Subtractive -- start with everything, filter away</td><td>FM -- start with pure tones, build up complexity</td></tr>
              <tr className="border-b border-border/10"><td className="py-2 text-primary/70">Source</td><td>Brown noise (all frequencies at once)</td><td>Two sine waves (simplest possible sound)</td></tr>
              <tr className="border-b border-border/10"><td className="py-2 text-primary/70">Interesting sounds from</td><td>Removing frequencies</td><td>Creating new frequencies via modulation</td></tr>
              <tr className="border-b border-border/10"><td className="py-2 text-primary/70">Expressiveness from</td><td>Wobbling the filter cutoff</td><td>Randomizing all the synth parameters</td></tr>
              <tr><td className="py-2 text-primary/70">Shared trick</td><td colSpan={2}><code>.connect(param)</code> -- routing audio into a setting</td></tr>
            </tbody>
          </table>
          <p>Both use modulation, but from opposite directions. Subtractive starts with everything and sculpts down. FM starts with almost nothing and builds up.</p>

          <h2>Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8 items-start">
            <ProjectMedia
              src={babelFigure}
              alt="Farnell's R2D2 Pure Data patch with color-coded branches"
              caption="Farnell's Fig 57.3 with color-coded signal branches, which helped me follow each path through the patch."
              variant="below"
              aspect="video"
              className="my-0"
            />
            <ProjectMedia
              src={babelNotebook}
              alt="Process notes"
              caption="Notes taken while working through the patch and planning my WebAudio implementation."
              variant="below"
              aspect="video"
              className="my-0"
            />
          </div>
          <p>
            The hardest part was not the code, but was reading Farnell's Pure Data patch (Fig 57.3). Annotating the textbook figure and taking notes alongside it was what made the structure legible -- it's just four copies of the same randomizer, each wired to a different synth parameter.
          </p>
          <p>
            A subtlety I initially missed: the modulator's frequency in Farnell's patch is not random on its own; it's always a <em>ratio</em> of the carrier frequency (between 0 and 0.5×). My first version had them completely independent, and it sounded like random noise bursts instead of chirps. Tying the modulator to the carrier was the single biggest improvement.
          </p>
          <p>
            I also learned that Pure Data uses <code>s</code> (send) and <code>r</code> (receive) boxes as invisible global variables -- the talk-speed slider doesn't have a visible wire to the randomizers, it broadcasts via a named channel.
          </p>
        </>
      ),
    },
    {
      slug: "multi-mode-synth",
      title: "Multi-Mode Synthesizer",
      date: "2026-02-13",
      description: "An expansion of the polyphonic keyboard into a multi-engine synthesizer. It supports Additive, AM, and FM synthesis modes, controlled via a custom LFO system for dynamic frequency modulation.",
      tags: ["audio", "webaudio", "DSP", "synthesis"],
      imageUrl: colorfulKeyboard2Image, // Don't forget to import this asset at the top
      content: (
        <>
          <p className="font-mono text-[11px] text-primary/70 tracking-tight lowercase mb-8">
            // source code: <a href="https://github.com/Kysariin/colorful-keyboard-with-synth" target="_blank" className="hover:underline text-primary">github.com/Kysariin/colorful-keyboard-with-synth</a>
          </p>

          <h3><a href="https://kysariin.github.io/colorful-keyboard-with-synth/" target="_blank">LAUNCH LIVE DEMO</a></h3>
          <ul>
            <li><a href="https://github.com/Kysariin/colorful-keyboard-with-synth" target="_blank">View GitHub Repository</a></li>
            <li><a href="https://www.marksantolucito.com/COMS3430/spring2026/Lab2" target="_blank">Original Assignment Reference</a></li>
          </ul>

          <h4>Project Demo</h4>
          <div className="relative w-full aspect-video my-8 border border-border/40 rounded-md overflow-hidden bg-card/30">
            <iframe
              src="https://player.vimeo.com/video/1164856784?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              className="absolute top-0 left-0 w-full h-full"
              title="Lab 2: Multi-Mode Synth Demo"
            ></iframe>
          </div>
          <h4>Advanced Synthesis Modes</h4>
          <p>
            For Lab 2, I transitioned the keyboard from a simple oscillator-per-key setup to something more customizable, per the assignment details:
          </p>
          <ul>
            <li><strong>Additive:</strong> Creates a thicker, more harmonic sound than Lab 1's keyboard (one wave).</li>
            <li><strong>AM (Amplitude Modulation):</strong> Uses a modulator to drive the carrier's gain, making tremelo effects and sidebands.</li>
            <li><strong>FM (Frequency Modulation):</strong> Mapped the modulator directly to the carrier's frequency for more of a metallic-y sound.</li>
          </ul>

          <h4>LFO Integration & Debugging</h4>
          <p>
            The biggest challenge for me was getting the LFO to behave consistently across all synthesis modes.
          </p>
          <ol>
            <li>
              <strong>Debugging the Modulator:</strong> I initially struggled with a broken modulation path, but fixed it by correctly routing the <code>lfoRateValue</code> to the carrier oscillator's frequency input.
            </li>
            <li>
              <strong>Interface & Playability:</strong> I added a front-end slider system for LFO Rate and Depth. I really wanted to exceed the basic interaction requirements by making the parameters feel responsive and "playable" in real-time.
            </li>
            <li>
              <strong>Safety First:</strong> I carried over the ADSR envelopes and gain scaling from Lab 1. This was crucial for FM synthesis, as the signals can get pretty chaotic, and I needed to ensure the master output didn't clip.
            </li>
          </ol>
        </>
      )
    },
    {
      slug: "colorful-keyboard",
      title: "Colorful Keyboard",
      date: "2026-01-30",
      description: "A polyphonic synthesizer built with JS and WebAudio, with ADSR envelopes and gain management to prevent clipping. The keyboard includes a reactive visualizer that maps audio frequencies to color gradients in real-time.",
      tags: ["audio", "webaudio", "synthesizer"],
      imageUrl: colorfulKeyboardImage,
      content: (
        <>
          <h3><a href="https://kysariin.github.io/colorful-keyboard/" target="_blank">LAUNCH LIVE DEMO</a></h3>
          <ul>
            <li><a href="https://github.com/kysariin/colorful-keyboard" target="_blank">View GitHub Repository</a></li>
            <li><a href="https://www.marksantolucito.com/COMS3430/spring2026/Lab1" target="_blank">Original Assignment Reference</a></li>
          </ul>

          <h4>Frequency-to-Color Mapping Logic</h4>
          <p>
            To create the synesthesia effect, the application mathematically translates audio data into visual data in real-time:
          </p>
          <ol>
            <li>
              <strong>Normalization (The Ratio):</strong> The code calculates where the played note’s frequency falls within the total range (approx. 260Hz to 980Hz), converting the pitch into a normalized 0.0 to 1.0 ratio.
            </li>
            <li>
              <strong>Linear Interpolation (The Blend):</strong> Using that ratio, the program performs linear interpolation on the RGB channels. For example, a ratio of 0.5 generates a color exactly halfway between the user's chosen start and end colors.
            </li>
            <li>
              <strong>Dynamic Rendering:</strong> The calculated color is applied to the background instantly. Simultaneously, a brightness check analyzes the RGB values and automatically flips the text color (black or white) to ensure readability.
            </li>
          </ol>
        </>
      )
    }
  ]
};