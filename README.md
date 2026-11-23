# news-2311-world-in-one-day

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/odockdai/news-2311-world-in-one-day/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/odockdai/news-2311-world-in-one-day/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

One image that sums up the world's news of **Monday 23 November 2026**. The entry is a newspaper front
page built to stay readable at 300 pixels across: a masthead with the weekday and date, a market strip,
an hour-by-hour timeline in UTC, three lead stories with a picture and a sourcing badge each, six
second-rank cards that carry one line of substance, a dotted world map whose numbered pins match the
stories, an `ALSO ON MONDAY` list, and a `DATE CHECK` box that names what was deliberately left out.

## The page

**Leads**

- Asia's AI selloff: Seoul's Kospi fell 3.74% and Taiwan's Taiex 0.93% as chip stocks slid; China, Taiwan and Korea announced market-support measures. Japan was shut for a holiday.
- Indonesia: 24 dead confirmed at the PT Fonusa Agung Mulia confectionery plant fire in Cikande, Banten; dozens still missing, DNA tests to take weeks.
- Kyiv region: a drone hit a block of flats in Dymer; the toll rose to 11 as a seven-year-old boy was pulled out alive after about 14 hours.

**Second rank**

- Benghazi: a Russian corvette, the Merkury, docked in eastern Libya.
- Khartoum: drones killed five children in the city.
- Istanbul: protests after police raided a media outlet.
- Baltic Sea: the tanker Sparta II was towed away.
- Gaza: Oxfam called the territory a "toxic wasteland".
- Brazil: Jair Bolsonaro was in intensive care.

**Also on Monday**

- Kathmandu: Nepal's new prime minister began his first visit to India.
- Mercury: BepiColombo settled into orbit around the planet.
- Arunachal: India and China opened ten days of border talks.
- Washington: the Pentagon limited military ties with Canada.
- Brussels: the EU drafted a tax on Big Tech in its next budget.
- Strait of Hormuz: Iran staged 14 tankers against the US blockade.
- Seattle was "outraged" over an ICE arrest of two passengers.
- Nigeria: the Bayelsa boat toll reached 29; N250m was approved.
- Denmark expelled a Russian attaché over an alleged plot.
- Poland said Russia tried twice to kill a Ukrainian rapper.
- South Korea's education minister resigned over AI cheating rules.
- Paolo Bulgari, the jeweller, died at 89 in Italy.

## Date check

The page is dated, and it says what it dropped so the day stays honest:

- COP31's collapse belongs to Sunday 22 November, not Monday.
- The ICJ's Myanmar genocide ruling was 19 November.
- Alcaraz's ATP Finals title was 22 November.
- The Cikande fire began on Saturday 21 November; only Monday's confirmed toll appears.

Badges: `CONFIRMED` means two or more outlets, `OFFICIAL` means the body itself, `REPORTED` means one outlet.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts   # copies entry.png to out/entry.png
```

`main.ts` copies the committed `entry.png` byte for byte, so both grader runs write the same file. Before
copying it checks the PNG signature, the 1 MiB size limit and the 1024 by 1024 pixel limit, and it fails
loudly rather than shipping a file the gate would refuse. The front page is drawn offline by
`dev/make_frontpage6.py` (Pillow) and committed as `entry.png`; nothing is generated at run time, so the
run needs no network, clock or randomness.

---

<sub>Entered on [make.fun](https://make.fun/?ref=xawxgk7v&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
