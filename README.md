# Weather Bot CLI

Weather Bot CLI is a lightweight terminal tool for checking current weather conditions.

## Install

```bash
npm install
npm link
```

## Usage

```bash
weather-bot --city Singapore --api-key "$WEATHER_API_KEY"
weather-bot --city Kaunas --unit metric --api-key "$WEATHER_API_KEY"
```

Configuration is loaded from `config.json` and environment variables.
