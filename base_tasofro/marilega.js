{
	"title": "マリサランド・レガシィ",
	"url_trial": "http://tasofro.net/arc/th155_trial.zip",
	"latest": "v1.10",
	"breakpoints": {
		"th135_file_header": {
			"file_hash": "[ebp-72]",
			"file_size": "[ebp-72+12]",
			"file_key": "edi",
			"cavesize": 5
		},
		"th135_file_name": {
			"file_name": "esi",
			"cavesize": 6
		},
		"th135_read_file#prepare": {
			"cavesize": 5,
			"hash": "[esi+65564]"
		},
		"th135_read_file": {
			"cavesize": 6,
			"apply": true
		}
	}
}
