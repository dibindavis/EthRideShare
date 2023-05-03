import {
  Box,
  Button,
  Card,
  IconButton,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
  
} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { makeStyles } from "@mui/styles";
import ethimage from "../resources/4373172_ethereum_logo_logos_icon.png";
import { View } from "ol";
const CardRide = () => {
  const data = {
    route: {
      sessionId:
        "AKYA5wcAAGUAAAATAAAACAAAAMQAAAB42mM4wsDAyMTAwMCekVqUapWc-yR7iQCQy_DSN7-K6_xlw23b8yvdQfQ2IM2ABcA0vlhsLwjilyaplzH4JTpvEyiVdw8E0gxAmgEH2P0t-PV_RiDjPiOHCkiAA0SwMHA6NDAoMCwQcHBlYHQBCbMwMQo4CjCwCAg4AF3LwsWhyMQCUtoK0qyUAQDrxiUwnp-lXQ:car",
      realTime: 6311,
      distance: 41.9413,
      time: 5331,
      formattedTime: "01:28:51",
      hasHighway: false,
      hasTollRoad: true,
      hasBridge: true,
      hasSeasonalClosure: false,
      hasTunnel: false,
      hasFerry: false,
      hasUnpaved: false,
      hasTimedRestriction: false,
      hasCountryCross: false,
      legs: [
        {
          index: 0,
          hasTollRoad: true,
          hasHighway: false,
          hasBridge: true,
          hasUnpaved: false,
          hasTunnel: false,
          hasSeasonalClosure: false,
          hasFerry: false,
          hasCountryCross: false,
          hasTimedRestriction: false,
          distance: 41.9413,
          time: 6311,
          formattedTime: "01:45:11",
          origIndex: 0,
          origNarrative: "",
          destIndex: 0,
          destNarrative: "",
          maneuvers: [
            {
              index: 0,
              distance: 0.617,
              narrative: "Head south on Metro Junction (SH-22). Go for 0.6 mi.",
              time: 158,
              direction: 4,
              directionName: "South",
              signs: [],
              maneuverNotes: [],
              formattedTime: "00:02:38",
              transportMode: "car",
              startPoint: {
                lat: 10.51082,
                lng: 76.21121,
              },
              turnType: 0,
              attributes: 0,
              iconUrl: "",
              streets: [
                "SH-22",
                "Metro Junction",
                "Kodungallur Shoranur Road",
                "Koorkenchery Main Road",
                "Velliyanoor Road",
              ],
              mapUrl:
                "https://www.mapquestapi.com/staticmap/v5/map?key=Cmjtd|luur2108n1,7w=o5-gz8a&size=225,160&locations=10.51082,76.21121|marker-1||10.501999999999997,76.21202000000001|marker-2||¢er=10.506409999999999,76.211615&defaultMarker=none&zoom=13&session=AKYA5wcAAGUAAAATAAAACAAAAMQAAAB42mM4wsDAyMTAwMCekVqUapWc-yR7iQCQy_DSN7-K6_xlw23b8yvdQfQ2IM2ABcA0vlhsLwjilyaplzH4JTpvEyiVdw8E0gxAmgEH2P0t-PV_RiDjPiOHCkiAA0SwMHA6NDAoMCwQcHBlYHQBCbMwMQo4CjCwCAg4AF3LwsWhyMQCUtoK0qyUAQDrxiUwnp-lXQ:car",
            },
            {
              index: 1,
              distance: 1.3714,
              narrative:
                "Turn left onto Koorkenchery Chiyyaram Road. Go for 1.4 mi.",
              time: 244,
              direction: 8,
              directionName: "East",
              signs: [],
              maneuverNotes: [],
              formattedTime: "00:04:04",
              transportMode: "car",
              startPoint: {
                lat: 10.501999999999997,
                lng: 76.21202000000001,
              },
              turnType: 6,
              attributes: 0,
              iconUrl: "",
              streets: ["Koorkenchery Chiyyaram Road"],
              mapUrl:
                "https://www.mapquestapi.com/staticmap/v5/map?key=Cmjtd|luur2108n1,7w=o5-gz8a&size=225,160&locations=10.501999999999997,76.21202000000001|marker-2||10.495520000000003,76.23068000000005|marker-3||¢er=10.49876,76.22135000000003&defaultMarker=none&zoom=12&session=AKYA5wcAAGUAAAATAAAACAAAAMQAAAB42mM4wsDAyMTAwMCekVqUapWc-yR7iQCQy_DSN7-K6_xlw23b8yvdQfQ2IM2ABcA0vlhsLwjilyaplzH4JTpvEyiVdw8E0gxAmgEH2P0t-PV_RiDjPiOHCkiAA0SwMHA6NDAoMCwQcHBlYHQBCbMwMQo4CjCwCAg4AF3LwsWhyMQCUtoK0qyUAQDrxiUwnp-lXQ:car",
            },
            {
              index: 2,
              distance: 0.8861,
              narrative: "Turn right onto Ollur Main Road. Go for 0.9 mi.",
              time: 167,
              direction: 5,
              directionName: "Southeast",
              signs: [],
              maneuverNotes: [],
              formattedTime: "00:02:47",
              transportMode: "car",
              startPoint: {
                lat: 10.495520000000003,
                lng: 76.23068000000005,
              },
              turnType: 2,
              attributes: 0,
              iconUrl: "",
              streets: ["Ollur Main Road"],
              mapUrl:
                "https://www.mapquestapi.com/staticmap/v5/map?key=Cmjtd|luur2108n1,7w=o5-gz8a&size=225,160&locations=10.495520000000003,76.23068000000005|marker-3||10.486980000000004,76.23883000000006|marker-4||¢er=10.491250000000004,76.23475500000006&defaultMarker=none&zoom=13&session=AKYA5wcAAGUAAAATAAAACAAAAMQAAAB42mM4wsDAyMTAwMCekVqUapWc-yR7iQCQy_DSN7-K6_xlw23b8yvdQfQ2IM2ABcA0vlhsLwjilyaplzH4JTpvEyiVdw8E0gxAmgEH2P0t-PV_RiDjPiOHCkiAA0SwMHA6NDAoMCwQcHBlYHQBCbMwMQo4CjCwCAg4AF3LwsWhyMQCUtoK0qyUAQDrxiUwnp-lXQ:car",
            },
            {
              index: 3,
              distance: 2.9844,
              narrative: "Continue on Ollur Main Road. Go for 3.0 mi.",
              time: 557,
              direction: 5,
              directionName: "Southeast",
              signs: [],
              maneuverNotes: [],
              formattedTime: "00:09:17",
              transportMode: "car",
              startPoint: {
                lat: 10.486980000000004,
                lng: 76.23883000000006,
              },
              turnType: 0,
              attributes: 0,
              iconUrl: "",
              streets: ["Ollur Main Road", "Highway Road"],
              mapUrl:
                "https://www.mapquestapi.com/staticmap/v5/map?key=Cmjtd|luur2108n1,7w=o5-gz8a&size=225,160&locations=10.486980000000004,76.23883000000006|marker-4||10.450230000000001,76.25788000000013|marker-5||¢er=10.468605000000004,76.24835500000009&defaultMarker=none&zoom=11&session=AKYA5wcAAGUAAAATAAAACAAAAMQAAAB42mM4wsDAyMTAwMCekVqUapWc-yR7iQCQy_DSN7-K6_xlw23b8yvdQfQ2IM2ABcA0vlhsLwjilyaplzH4JTpvEyiVdw8E0gxAmgEH2P0t-PV_RiDjPiOHCkiAA0SwMHA6NDAoMCwQcHBlYHQBCbMwMQo4CjCwCAg4AF3LwsWhyMQCUtoK0qyUAQDrxiUwnp-lXQ:car",
            },
            {
              index: 4,
              distance: 0.0429,
              narrative: "Continue on Thalore Junction. Go for 226 ft.",
              time: 16,
              direction: 5,
              directionName: "Southeast",
              signs: [],
              maneuverNotes: [],
              formattedTime: "00:00:16",
              transportMode: "car",
              startPoint: {
                lat: 10.450230000000001,
                lng: 76.25788000000013,
              },
              turnType: 0,
              attributes: 0,
              iconUrl: "",
              streets: ["Thalore Junction"],
              mapUrl:
                "https://www.mapquestapi.com/staticmap/v5/map?key=Cmjtd|luur2108n1,7w=o5-gz8a&size=225,160&locations=10.450230000000001,76.25788000000013|marker-5||10.449900000000001,76.25841000000013|marker-6||¢er=10.450065000000002,76.25814500000013&defaultMarker=none&zoom=16&session=AKYA5wcAAGUAAAATAAAACAAAAMQAAAB42mM4wsDAyMTAwMCekVqUapWc-yR7iQCQy_DSN7-K6_xlw23b8yvdQfQ2IM2ABcA0vlhsLwjilyaplzH4JTpvEyiVdw8E0gxAmgEH2P0t-PV_RiDjPiOHCkiAA0SwMHA6NDAoMCwQcHBlYHQBCbMwMQo4CjCwCAg4AF3LwsWhyMQCUtoK0qyUAQDrxiUwnp-lXQ:car",
            },
            {
              index: 5,
              distance: 0.2691,
              narrative:
                "Turn right onto Thalore Junction (NH-544). Go for 0.3 mi.",
              time: 48,
              direction: 4,
              directionName: "South",
              signs: [],
              maneuverNotes: [],
              formattedTime: "00:00:48",
              transportMode: "car",
              startPoint: {
                lat: 10.449900000000001,
                lng: 76.25841000000013,
              },
              turnType: 2,
              attributes: 0,
              iconUrl: "",
              streets: [
                "NH-544",
                "Thalore Junction",
                "Aluva Road",
                "Mannuthy Bypass Road",
                "Mulayam Road",
                "Service Road",
                "Vadakkencherry Road",
                "NH-47",
              ],
              mapUrl:
                "https://www.mapquestapi.com/staticmap/v5/map?key=Cmjtd|luur2108n1,7w=o5-gz8a&size=225,160&locations=10.449900000000001,76.25841000000013|marker-6||10.446050000000001,76.25890000000012|marker-7||¢er=10.447975000000001,76.25865500000012&defaultMarker=none&zoom=14&session=AKYA5wcAAGUAAAATAAAACAAAAMQAAAB42mM4wsDAyMTAwMCekVqUapWc-yR7iQCQy_DSN7-K6_xlw23b8yvdQfQ2IM2ABcA0vlhsLwjilyaplzH4JTpvEyiVdw8E0gxAmgEH2P0t-PV_RiDjPiOHCkiAA0SwMHA6NDAoMCwQcHBlYHQBCbMwMQo4CjCwCAg4AF3LwsWhyMQCUtoK0qyUAQDrxiUwnp-lXQ:car",
            },
            {
              index: 6,
              distance: 10.6087,
              narrative: "Take ramp onto Aluva Road (NH-544). Go for 10.6 mi.",
              time: 1275,
              direction: 5,
              directionName: "Southeast",
              signs: [],
              maneuverNotes: [],
              formattedTime: "00:21:15",
              transportMode: "car",
              startPoint: {
                lat: 10.446050000000001,
                lng: 76.25890000000012,
              },
              turnType: -1,
              attributes: 0,
              iconUrl: "",
              streets: [
                "NH-544",
                "Service Road",
                "Aluva Road",
                "Mannuthy Bypass Road",
                "Mulayam Road",
                "Vadakkencherry Road",
                "NH-47",
                "Amballur Junction",
                "Kanalikkunnu Bridge",
                "Panampilly Junction",
              ],
              mapUrl:
                "https://www.mapquestapi.com/staticmap/v5/map?key=Cmjtd|luur2108n1,7w=o5-gz8a&size=225,160&locations=10.446050000000001,76.25890000000012|marker-7||10.318820000000004,76.32699000000015|marker-8||¢er=10.382435000000003,76.29294500000015&defaultMarker=none&zoom=9&session=AKYA5wcAAGUAAAATAAAACAAAAMQAAAB42mM4wsDAyMTAwMCekVqUapWc-yR7iQCQy_DSN7-K6_xlw23b8yvdQfQ2IM2ABcA0vlhsLwjilyaplzH4JTpvEyiVdw8E0gxAmgEH2P0t-PV_RiDjPiOHCkiAA0SwMHA6NDAoMCwQcHBlYHQBCbMwMQo4CjCwCAg4AF3LwsWhyMQCUtoK0qyUAQDrxiUwnp-lXQ:car",
            },
            {
              index: 7,
              distance: 2.2139,
              narrative: "Keep right onto Aluva Road (NH-544). Go for 2.2 mi.",
              time: 313,
              direction: 4,
              directionName: "South",
              signs: [],
              maneuverNotes: [],
              formattedTime: "00:05:13",
              transportMode: "car",
              startPoint: {
                lat: 10.318820000000004,
                lng: 76.32699000000015,
              },
              turnType: 16,
              attributes: 0,
              iconUrl: "",
              streets: [
                "NH-544",
                "Aluva Road",
                "Vadakkencherry Road",
                "NH-47",
                "Justice K N Kurup Square",
              ],
              mapUrl:
                "https://www.mapquestapi.com/staticmap/v5/map?key=Cmjtd|luur2108n1,7w=o5-gz8a&size=225,160&locations=10.318820000000004,76.32699000000015|marker-8||10.28985,76.33646000000019|marker-9||¢er=10.304335000000002,76.33172500000018&defaultMarker=none&zoom=11&session=AKYA5wcAAGUAAAATAAAACAAAAMQAAAB42mM4wsDAyMTAwMCekVqUapWc-yR7iQCQy_DSN7-K6_xlw23b8yvdQfQ2IM2ABcA0vlhsLwjilyaplzH4JTpvEyiVdw8E0gxAmgEH2P0t-PV_RiDjPiOHCkiAA0SwMHA6NDAoMCwQcHBlYHQBCbMwMQo4CjCwCAg4AF3LwsWhyMQCUtoK0qyUAQDrxiUwnp-lXQ:car",
            },
            {
              index: 8,
              distance: 1.6678,
              narrative:
                "Keep right onto Aluva Road (NH-544) toward Sabarimala/Thiruvananthapuram/Edapally/Ernakulam. Go for 1.7 mi.",
              time: 216,
              direction: 5,
              directionName: "Southeast",
              signs: [],
              maneuverNotes: [],
              formattedTime: "00:03:36",
              transportMode: "car",
              startPoint: {
                lat: 10.28985,
                lng: 76.33646000000019,
              },
              turnType: 16,
              attributes: 0,
              iconUrl: "",
              streets: ["NH-544", "Aluva Road", "Vadakkencherry Road", "NH-47"],
              mapUrl:
                "https://www.mapquestapi.com/staticmap/v5/map?key=Cmjtd|luur2108n1,7w=o5-gz8a&size=225,160&locations=10.28985,76.33646000000019|marker-9||10.27017,76.34841000000024|marker-10||¢er=10.28001,76.34243500000022&defaultMarker=none&zoom=12&session=AKYA5wcAAGUAAAATAAAACAAAAMQAAAB42mM4wsDAyMTAwMCekVqUapWc-yR7iQCQy_DSN7-K6_xlw23b8yvdQfQ2IM2ABcA0vlhsLwjilyaplzH4JTpvEyiVdw8E0gxAmgEH2P0t-PV_RiDjPiOHCkiAA0SwMHA6NDAoMCwQcHBlYHQBCbMwMQo4CjCwCAg4AF3LwsWhyMQCUtoK0qyUAQDrxiUwnp-lXQ:car",
            },
            {
              index: 9,
              distance: 13.1669,
              narrative: "Keep right onto Aluva Road (NH-544). Go for 13.2 mi.",
              time: 1902,
              direction: 4,
              directionName: "South",
              signs: [],
              maneuverNotes: [],
              formattedTime: "00:31:42",
              transportMode: "car",
              startPoint: {
                lat: 10.27017,
                lng: 76.34841000000024,
              },
              turnType: 16,
              attributes: 0,
              iconUrl: "",
              streets: [
                "NH-544",
                "Aluva Road",
                "Vadakkencherry Road",
                "NH-47",
                "Koratty JTS Junction",
                "Karayamparambu Signal Junction",
                "Athani Airport Junction",
                "Airport Signal Junction",
              ],
              mapUrl:
                "https://www.mapquestapi.com/staticmap/v5/map?key=Cmjtd|luur2108n1,7w=o5-gz8a&size=225,160&locations=10.27017,76.34841000000024|marker-10||10.119240000000005,76.34321000000024|marker-11||¢er=10.194705000000003,76.34581000000024&defaultMarker=none&zoom=9&session=AKYA5wcAAGUAAAATAAAACAAAAMQAAAB42mM4wsDAyMTAwMCekVqUapWc-yR7iQCQy_DSN7-K6_xlw23b8yvdQfQ2IM2ABcA0vlhsLwjilyaplzH4JTpvEyiVdw8E0gxAmgEH2P0t-PV_RiDjPiOHCkiAA0SwMHA6NDAoMCwQcHBlYHQBCbMwMQo4CjCwCAg4AF3LwsWhyMQCUtoK0qyUAQDrxiUwnp-lXQ:car",
            },
            {
              index: 10,
              distance: 4.2899,
              narrative: "Keep right onto Aluva Road (NH-544). Go for 4.3 mi.",
              time: 637,
              direction: 4,
              directionName: "South",
              signs: [],
              maneuverNotes: [],
              formattedTime: "00:10:37",
              transportMode: "car",
              startPoint: {
                lat: 10.119240000000005,
                lng: 76.34321000000024,
              },
              turnType: 16,
              attributes: 0,
              iconUrl: "",
              streets: [
                "NH-544",
                "Aluva Road",
                "Vadakkencherry Road",
                "NH-47",
                "Marthanda Varma Bridge",
                "Alura Junction",
                "Bypass Junction",
              ],
              mapUrl:
                "https://www.mapquestapi.com/staticmap/v5/map?key=Cmjtd|luur2108n1,7w=o5-gz8a&size=225,160&locations=10.119240000000005,76.34321000000024|marker-11||10.065710000000005,76.32758000000015|marker-12||¢er=10.092475000000004,76.3353950000002&defaultMarker=none&zoom=11&session=AKYA5wcAAGUAAAATAAAACAAAAMQAAAB42mM4wsDAyMTAwMCekVqUapWc-yR7iQCQy_DSN7-K6_xlw23b8yvdQfQ2IM2ABcA0vlhsLwjilyaplzH4JTpvEyiVdw8E0gxAmgEH2P0t-PV_RiDjPiOHCkiAA0SwMHA6NDAoMCwQcHBlYHQBCbMwMQo4CjCwCAg4AF3LwsWhyMQCUtoK0qyUAQDrxiUwnp-lXQ:car",
            },
            {
              index: 11,
              distance: 3.3672,
              narrative: "Keep right onto Aluva Road (NH-544). Go for 3.4 mi.",
              time: 647,
              direction: 6,
              directionName: "Southwest",
              signs: [],
              maneuverNotes: [],
              formattedTime: "00:10:47",
              transportMode: "car",
              startPoint: {
                lat: 10.065710000000005,
                lng: 76.32758000000015,
              },
              turnType: 16,
              attributes: 0,
              iconUrl: "",
              streets: [
                "NH-544",
                "Aluva Road",
                "Vadakkencherry Road",
                "NH-47",
                "Apollo Junction",
                "T V S Junction",
                "Kochin University Junction",
                "Kanjipadam Road",
                "P T Jacob Road",
                "Puthiya Bypass",
                "Puthiya Road",
                "Edappally Flyover",
                "Edappally Toll Junction",
              ],
              mapUrl:
                "https://www.mapquestapi.com/staticmap/v5/map?key=Cmjtd|luur2108n1,7w=o5-gz8a&size=225,160&locations=10.065710000000005,76.32758000000015|marker-12||10.022229999999999,76.30670000000012|marker-13||¢er=10.043970000000002,76.31714000000014&defaultMarker=none&zoom=11&session=AKYA5wcAAGUAAAATAAAACAAAAMQAAAB42mM4wsDAyMTAwMCekVqUapWc-yR7iQCQy_DSN7-K6_xlw23b8yvdQfQ2IM2ABcA0vlhsLwjilyaplzH4JTpvEyiVdw8E0gxAmgEH2P0t-PV_RiDjPiOHCkiAA0SwMHA6NDAoMCwQcHBlYHQBCbMwMQo4CjCwCAg4AF3LwsWhyMQCUtoK0qyUAQDrxiUwnp-lXQ:car",
            },
            {
              index: 12,
              distance: 0.1212,
              narrative:
                "Continue on Edappally Palarivattom Road. Go for 0.1 mi.",
              time: 41,
              direction: 6,
              directionName: "Southwest",
              signs: [],
              maneuverNotes: [],
              formattedTime: "00:00:41",
              transportMode: "car",
              startPoint: {
                lat: 10.022229999999999,
                lng: 76.30670000000012,
              },
              turnType: 0,
              attributes: 0,
              iconUrl: "",
              streets: [
                "Edappally Palarivattom Road",
                "Old NH-47",
                "Mamangalam Road",
              ],
              mapUrl:
                "https://www.mapquestapi.com/staticmap/v5/map?key=Cmjtd|luur2108n1,7w=o5-gz8a&size=225,160&locations=10.022229999999999,76.30670000000012|marker-13||10.0207,76.30584000000012|marker-14||¢er=10.021465,76.30627000000013&defaultMarker=none&zoom=16&session=AKYA5wcAAGUAAAATAAAACAAAAMQAAAB42mM4wsDAyMTAwMCekVqUapWc-yR7iQCQy_DSN7-K6_xlw23b8yvdQfQ2IM2ABcA0vlhsLwjilyaplzH4JTpvEyiVdw8E0gxAmgEH2P0t-PV_RiDjPiOHCkiAA0SwMHA6NDAoMCwQcHBlYHQBCbMwMQo4CjCwCAg4AF3LwsWhyMQCUtoK0qyUAQDrxiUwnp-lXQ:car",
            },
            {
              index: 13,
              distance: 0.3275,
              narrative:
                "Turn left onto Balakrishna Menon Road. Go for 0.3 mi.",
              time: 88,
              direction: 4,
              directionName: "South",
              signs: [],
              maneuverNotes: [],
              formattedTime: "00:01:28",
              transportMode: "car",
              startPoint: {
                lat: 10.0207,
                lng: 76.30584000000012,
              },
              turnType: 6,
              attributes: 0,
              iconUrl: "",
              streets: ["Balakrishna Menon Road"],
              mapUrl:
                "https://www.mapquestapi.com/staticmap/v5/map?key=Cmjtd|luur2108n1,7w=o5-gz8a&size=225,160&locations=10.0207,76.30584000000012|marker-14||10.016519999999996,76.30752000000017|marker-15||¢er=10.018609999999999,76.30668000000014&defaultMarker=none&zoom=14&session=AKYA5wcAAGUAAAATAAAACAAAAMQAAAB42mM4wsDAyMTAwMCekVqUapWc-yR7iQCQy_DSN7-K6_xlw23b8yvdQfQ2IM2ABcA0vlhsLwjilyaplzH4JTpvEyiVdw8E0gxAmgEH2P0t-PV_RiDjPiOHCkiAA0SwMHA6NDAoMCwQcHBlYHQBCbMwMQo4CjCwCAg4AF3LwsWhyMQCUtoK0qyUAQDrxiUwnp-lXQ:car",
            },
            {
              index: 14,
              distance: 0.0075,
              narrative: "Turn left onto Balakrishna Menon Road. Go for 39 ft.",
              time: 2,
              direction: 8,
              directionName: "East",
              signs: [],
              maneuverNotes: [],
              formattedTime: "00:00:02",
              transportMode: "car",
              startPoint: {
                lat: 10.016519999999996,
                lng: 76.30752000000017,
              },
              turnType: 6,
              attributes: 0,
              iconUrl: "",
              streets: ["Balakrishna Menon Road"],
              mapUrl:
                "https://www.mapquestapi.com/staticmap/v5/map?key=Cmjtd|luur2108n1,7w=o5-gz8a&size=225,160&locations=10.016519999999996,76.30752000000017|marker-15||10.016548999999996,76.30763000000017|marker-16||¢er=10.016534499999995,76.30757500000017&defaultMarker=none&zoom=16&session=AKYA5wcAAGUAAAATAAAACAAAAMQAAAB42mM4wsDAyMTAwMCekVqUapWc-yR7iQCQy_DSN7-K6_xlw23b8yvdQfQ2IM2ABcA0vlhsLwjilyaplzH4JTpvEyiVdw8E0gxAmgEH2P0t-PV_RiDjPiOHCkiAA0SwMHA6NDAoMCwQcHBlYHQBCbMwMQo4CjCwCAg4AF3LwsWhyMQCUtoK0qyUAQDrxiUwnp-lXQ:car",
            },
            {
              index: 15,
              distance: 0,
              narrative: "Arrive at Balakrishna Menon Road.",
              time: 0,
              direction: 0,
              directionName: "None",
              signs: [],
              maneuverNotes: [],
              formattedTime: "00:00:00",
              transportMode: "car",
              startPoint: {
                lat: 10.016548999999996,
                lng: 76.30763000000017,
              },
              turnType: 0,
              attributes: 0,
              iconUrl: "",
              streets: [],
            },
          ],
        },
      ],
      options: {
        routeType: "FASTEST",
        enhancedNarrative: false,
        doReverseGeocode: true,
        narrativeType: "text",
        walkingSpeed: -1,
        highwayEfficiency: 22,
        avoids: false,
        generalize: -1,
        shapeFormat: "raw",
        unit: "M",
        locale: "en_US",
        useTraffic: false,
        timeType: 0,
        dateType: 0,
        manMaps: true,
        sideOfStreetDisplay: true,
      },
      boundingBox: {
        ul: {
          lat: 10.51082,
          lng: 76.21109999999997,
        },
        lr: {
          lat: 10.016519999999996,
          lng: 76.38686000000024,
        },
      },
      name: "NH-544",
      maxRoutes: "",
      locations: [
        {
          street: "",
          adminArea6: "",
          adminArea6Type: "Neighborhood",
          adminArea5: "Thrissur",
          adminArea5Type: "City",
          adminArea4: "Thrissur",
          adminArea4Type: "County",
          adminArea3: "KL",
          adminArea3Type: "State",
          adminArea1: "IN",
          adminArea1Type: "Country",
          postalCode: "",
          geocodeQualityCode: "A5XAX",
          geocodeQuality: "CITY",
          dragPoint: false,
          sideOfStreet: "N",
          linkId: "0",
          unknownInput: "",
          type: "s",
          latLng: {
            lat: 10.51082,
            lng: 76.21121,
          },
          displayLatLng: {
            lat: 10.51082,
            lng: 76.21121,
          },
          mapUrl: "",
        },
        {
          street: "",
          adminArea6: "Edappally",
          adminArea6Type: "Neighborhood",
          adminArea5: "Ernakulam",
          adminArea5Type: "City",
          adminArea4: "Ernakulam",
          adminArea4Type: "County",
          adminArea3: "KL",
          adminArea3Type: "State",
          adminArea1: "IN",
          adminArea1Type: "Country",
          postalCode: "682024",
          geocodeQualityCode: "A6XAX",
          geocodeQuality: "NEIGHBORHOOD",
          dragPoint: false,
          sideOfStreet: "N",
          linkId: "0",
          unknownInput: "",
          type: "s",
          latLng: {
            lat: 10.01655,
            lng: 76.30763,
          },
          displayLatLng: {
            lat: 10.01655,
            lng: 76.30763,
          },
          mapUrl: "",
        },
      ],
      locationSequence: [0, 1],
    },
    info: {
      statuscode: 0,
      copyright: {
        text: "© 2022 MapQuest, Inc.",
        imageUrl: "http://api.mqcdn.com/res/mqlogo.gif",
        imageAltText: "© 2022 MapQuest, Inc.",
      },
      messages: [],
    },
  };
  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }

  const street = [];
  const useStyle = makeStyles({
    myText: {
      fontFamily: "Montserrat",
    },
  });
  const toolTip=[];
  return (
    <div style={{ backgroundColor: "#1B262C", fontFamily: "Montserrat" }}>
      {data.route.legs.map((data) =>
        data.maneuvers.map((data) =>
          data.streets.map((data) => {
            street.push(data);
          })
        )
      )}
      <ul>
        {street.filter(onlyUnique).map((place) => {
          if (place.includes("Junction")) {
               toolTip.push(place) 
            return (
              <li style={{ color: "#BBE1FA" }}>
                <Typography sx={{ fontFamily: "Montserrat" }}>
                  {place}
                </Typography>
              </li>
            );
          }
        })}
      </ul>
      <Card
        sx={{
          height: "15rem",
          minWidth: "70%",
          padding:'1rem',
          margin:'2rem 2rem',
          background: "linear-gradient(to right bottom, #3282B8, #0F4C75)",
          borderRadius: "18px",
          display: "flex",
        }}
      >
        <Box   width="70vw">
          <ListItem>
            <ListItemText
              primary={
                <>
                  <Typography
                    fontFamily="Montserrat"
                    fontWeight="bolder"
                    width="80%"
                  >
                    EDAPPALLY - THRISSUR
                  <Tooltip sx={{marginBottom:'5px'}} title={toolTip}>
                    <IconButton>
                      <InfoIcon/>
                    </IconButton>
                  </Tooltip>
                  </Typography>
                </>
              }
              secondary={
                <>
                  <Typography sx={{ fontWeight:'bold', fontFamily: "Montserrat" }}>
                    Departure time
                  </Typography>
                  <Typography sx={{ fontWeight:'bold' ,fontFamily: "Montserrat" }}>
                    Driver
                  </Typography>
                  <Typography sx={{ fontWeight:'bold',fontFamily: "Montserrat" }}>ID</Typography>
                  <Typography sx={{ fontWeight:'bold',fontFamily: "Montserrat" }}>Remaining Seats</Typography>
                </>
              }
            />
          </ListItem>
        </Box>
        <hr style={{height:'90%',width:'2px',background:'#1B262C',margin:'1rem 2rem',border:'#1B262C'}}></hr>
        <Box>

          <Box sx={{ width: "100%", display: "flex", padding: "1rem" }}>
            <h3>0.000000000000022 ETH</h3>
            <img src={ethimage} width="30vw" style={{paddingTop:'8px'}} height="40rem"></img>
          </Box>
          <Box sx={{ padding: "1rem" }}>
            <Button
              sx={{
                ":hover": {
                  color: "#1B262C",
                  background: "#BBE1FA",
                  borderWidth: "2rem",
                },
                color: "whitesmoke",
                backgroundColor: "#1B262C",
                borderRadius: "2rem",
              }}
            >
              JOIN
            </Button>
          </Box>
        </Box>
      </Card>
    </div>
  );
};
export default CardRide;
