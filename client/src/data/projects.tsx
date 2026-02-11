import React from "react";
import { ProjectMedia } from "@/components/ProjectMedia";

import g0ngsh1HeroImage from "@/assets/g0ngsh1/g0ngsh1_hero.png";
import g0ngsh1BaseImage from "@/assets/g0ngsh1/g0ngsh1_base.png";
import g0ngsh1TopImage from "@/assets/g0ngsh1/g0ngsh1_top.png";
import g0ngsh1HeaderImage from "@/assets/g0ngsh1/g0ngsh1_pinheader.png";
import g0ngsh1SolderBImage from "@/assets/g0ngsh1/g0ngsh1_solder_bottom.png";
import g0ngsh1SolderTImage from "@/assets/g0ngsh1/g0ngsh1_solder_top.png";
import colorfulKeyboardImage from "@/assets/colorfulkeyboard/colorfulkeyboard.png";

export const PROJECTS = {
  systems: [
    {
      slug: "heart",
      title: "heArt",
      date: "2026-02-11", 
      description: "A custom heart-shaped PCB designed for Creative Embedded Systems. Afixed to it is a 555 LED timer that blinks red.",
      tags: ["pcb design", "milling", "kicad", "fabrication", "soldering"],
      // imageUrl: heartHeroImage, // TODO: Uncomment this after importing image
      content: (
        <>
          <h2>Concept</h2>
          <p>
            "heArt" is a custom heart-shaped PCB designed for a Valentine’s-adjacent deadline, though its wiring initially attempted a deeper thematic 
            connection. As an East Asian Studies minor, I originally intended to incorporate the kanji for "love" (愛) into the circuit layout. When the 
            complex strokes proved impossible to route cleanly, I shifted to a stylized "A" formation—a nod to the kanji’s romanization, <i>ai</i>.
          </p>
          <p>
            While the traces don't strictly reflect this "A," the component placement does: the battery forms the tip of the A, the timer chip acts as the horizontal 
            bar, and the resistors/capacitors/LED create the diagonals (except for C2, which had to be moved for trace purposes). This deviation from my original plan 
            feels like an apt metaphor for the unpredictability of love and how it rarely fits into neat, preconceived structures.
          </p>
          <p>
            The "A" being capitalized is of course a nod to the kanji's romanization. "Love" (the capital "A" based on <i>ai</i>/愛) being at the legitimate center 
            of the word is a happy coincidence that I like to think adds to the title's meaning, even if it was not intentional.
          </p>

          <h3>Hardware</h3>
          <ul>
            <li><strong>Power:</strong> 3V CR2032 Coin Cell</li>
            <li><strong>Logic:</strong> TLC555xP Timer Chip</li>
            <li><strong>Pulse:</strong> ~2.03 Hz Frequency</li>
            <li><strong>Material:</strong> Copper clad board</li>
          </ul>

          <h3>Assembly & Fabrication</h3>
          <p>
            The board outline was imported from an .svg file online, and I used KiCad to design the traces and component placements. 
            I had to iterate quite a bit to get the trace routing right, especially given the heart shape (and attempts to follow the "A" concept).
            The PCB was both milled and soldered in the PL Lab.
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
          <p>here will be the images and captions about the process</p>
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