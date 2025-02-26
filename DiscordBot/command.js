const { REST, Routes } =require ('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTM0MTk4NjQ2MDExODgxNDgxMQ.GH41DT.wDwwVwt_Bz5JeqYL-vl1T1vk_unSyNegex1n6g");

(async ()=>{
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands("1341986460118814811"), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
})();
