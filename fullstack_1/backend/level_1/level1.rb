require('json')
file = File.read('data/input.json')
data_hash = JSON.parse(file)
objectives=data_hash["objectives"]
records=data_hash["progress_records"]

progress_records=[]

for x in records
	for y in objectives
		if x["objective_id"]==y["id"]

			result=((x["value"]-y["start"]).to_f/(y["target"]-y["start"]).to_f)*100
			progress_records.push({id:x["id"],progress:result.round})
		end
	end
end



puts JSON.pretty_generate({progress_records:progress_records})