// ResumePortfolio.jsx
import React from "react";
import FractalCursorEffect from "./fractal";

export default function ResumePortfolio() {
  return (
    <div className="relative w-full min-h-screen bg-[#000022] text-white font-mono">
      <FractalCursorEffect />

      <main className="relative z-10 max-w-4xl mx-auto p-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Thomas Kane Leonard</h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-300">
          Self-taught developer with a foundation in IT and cloud technologies, actively building tools that blend creativity with utility. Passionate about low-level control, game mechanics, and automation.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Selected Projects</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="text-xl font-bold">Falling Rock Survival Game</h3>
              <p className="text-gray-400">
                A Python-based arcade game where the player dodges animated falling rocks. Built in Pygame, includes a smooth control system, live scoring, and a high score input screen with MIDI-style background music.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">Fractal Background Generator</h3>
              <p className="text-gray-400">
                This resume’s backdrop – a reactive fractal animation coded in React with HTML5 canvas, responding to cursor movement. Designed to add depth without distraction.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">WeatherNow</h3>
              <p className="text-gray-400">
                A Flask-based app connected to OpenWeatherMap’s API. Users input a city name and receive real-time weather conditions. Deployable to Azure, used as a beginner-friendly demo of API usage and deployment.
              </p>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-300">
            I’ve been learning by building. My journey started in IT, shifted toward programming, and now stretches into cloud platforms and automation. I use what I learn to make things that feel fun, helpful, or just plain cool. I’m currently studying JavaScript, and leveling up my deployment skills with Azure and Flask.
          </p>
        </section>

        <footer className="text-gray-500 text-sm">
          Camden County, NJ · tkl@devmail.com · github.com/tkl1020
        </footer>
      </main>
    </div>
  );
}
