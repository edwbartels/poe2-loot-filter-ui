const templateText = `
Show # $type->currency $tier->1
	Class == "Stackable Currency"
	BaseType == "Mirror of Kalandra" "Perfect Jeweller's Orb" "Divine Orb"
	SetFontSize 45
	SetTextColor 255 0 0 255
	SetBorderColor 255 0 0 255
	SetBackgroundColor 255 255 255 255
	PlayAlertSound 6 300
	PlayEffect Red
	MinimapIcon 0 Red Star

Show # $type->currency $tier->2
	Class == "Stackable Currency"
	BaseType == "Greater Jeweller's Orb" "Orb of Annulment" "Orb of Chance"
	SetFontSize 40
	SetTextColor 255 255 255 255
	SetBorderColor 255 255 255 255
	SetBackgroundColor 240 90 35 255
	PlayAlertSound 1 300
	PlayEffect Red
	MinimapIcon 0 Red Circle

Show # $type->currency $tier->3
	Class == "Stackable Currency"
	BaseType == "Exalted Orb" "Gemcutter's Prism" "Chaos Orb"
	SetFontSize 35
	SetTextColor 0 0 0 255
	SetBorderColor 0 0 0 255
	SetBackgroundColor 249 150 25 255
	PlayAlertSound 2 300
	PlayEffect Yellow
	MinimapIcon 2 Yellow Circle

Show # $type->currency $tier->4
	Class == "Stackable Currency"
	BaseType == "Glassblower's Bauble" "Orb of Alchemy" "Vaal Orb" "Armourer's Scrap" "Chance Shard" "Artificer's Orb" "Regal Orb" "Blacksmith's Whetstone" "Arcanist's Etcher"
	SetFontSize 30
	SetTextColor 0 0 0 255
	SetBorderColor 0 0 0 255
	SetBackgroundColor 213 159 0 255
	PlayAlertSound 2 300
	PlayEffect White
	MinimapIcon 2 White Circle

Show # $type->currency $tier->5
	Class == "Stackable Currency"
	BaseType == "Lesser Jeweller's Orb" "Artificer's Shard" "Regal Shard" "Orb of Augmentation" "Orb of Transmutation" "Scroll of Wisdom" "Transmutation Shard"
	SetFontSize 25
	SetTextColor 0 0 0 255
	SetBorderColor 0 0 0 255
	SetBackgroundColor 210 178 135 255
	MinimapIcon 2 Grey Circle
	`
export default templateText
