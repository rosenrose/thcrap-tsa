{
	"binhacks": {
		"Main/Infinite lives": {
			"addr": "0x44921A",
			"code": "90",
			"expected": "49"
		},
		"Main/Infinite bombs": {
			"addr": "0x411C96",
			"code": "909090",
			"expected": "83C0FF"
		},
		"Main/Invincible": {
			"addr": "0x449420",
			"code": "C3",
			"expected": "55"
		},
		"Main/Power Settings/Max Power": {
			"addr": "0x4304BC",
			"code": "34"
		},
		"Main/Power doesn't decrease on death": {
			"addr": "0x447B9D",
			"code": "C0"
		},
		"Main/Roaring/Freeze Roaring Timer#1": {
			"addr": "0x40EE79",
			"code": "E8 3CB00800"
		},
		"Main/Roaring/Freeze Roaring Timer#2": {
			"addr": "0x499EBA",
			"code": "A3 08594B00 A1 4CEA4A00 C3",
			"comment": "Save current status."
		},		
		"Main/Roaring/Freeze Roaring Timer#3": {
			"addr": "0x40EF1D",
			"code": "E8 A3AF0800 9090909090"
		},
		"Main/Roaring/Freeze Roaring Timer#4": {
			"addr": "0x499EC5",
			"code": "803D 08594B00 06 74 09 803D 08594B00 0E 75 04 66 0FEFC0 8B35 D0774B00 C3",
			"comment": "Check saved status.(0x2: normal, 0x6: Press X, 0xE: Hit by bullet)"
		},
		"Main/Roaring/Doesn't decrease on firing#1": {
			"addr": "0x411267",
			"code": "E8 768C0800"
		},
		"Main/Roaring/Doesn't decrease on firing#2": {
			"addr": "0x499EE2",
			"code": "81F9 A45A4B00 74 05 F3 0F1149 08 C3",
			"comment": "At roaring mode, ECX is 0x4B5AA4."
		},
		"Main/Auto-bomb": {
			"addr": "0x447C19",
			"code": "C6",
			"expected": "F6"
		},
		"Main/Boss timer freeze#1": {
			"addr": "0x41A8CF",
			"code": "EB",
			"expected": "7C",
			"ignore": true
		},
		"Main/Boss timer freeze#2": {
			"addr": "0x420A1F",
			"code": "524E",
			"expected": "ED4D",
			"ignore": true
		},
		"Main/Auto-collect items": {
			"addr": "0x4335B1",
			"code": "E9 540200",
			"expected": "0F855302"
		},
		"Main/Max Graze": {
			"addr": "0x43029F",
			"code": "FFE0F505",
			"ignore": true
		},
		"Main/Max Point item#1": {
			"addr": "0x430400",
			"code": "E8 EB9A0600 90909090"
		},
		"Main/Max Point item#2": {
			"addr": "0x499EF0",
			"code": "A1 2C5A4B00 A3 245A4B00 C3"
		}
	}
}
