import {defineStore} from "pinia";


export let useTeamStore = defineStore('team', {
    state: () => ({
            name: '',
            spots: 0,
            members: [],
            count: 1
        }),
    actions: {
        fill() {
            import('@/team.json').then((r) => {
                let data = r.default;
                this.name = data.name
                this.spots = data.spots
                this.members = data.members
                // this.$state = data
            })
        },

        addNewMember(member){
           this.members.push(member)
        }
        //
        // openModal(){
        //     this.show = true
        // },
        //
        // closeModal(){
        //     this.show = false
        // }
    },
    getters: {
        isFullTeam() {
            return this.members.length === this.spots
        },

        remainingSpots() {
            return this.spots - this.members.length
        }
    }
})