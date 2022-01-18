export default {
  data() {
    return {
      searchName: "",
      names: ["Vlad", "Max", "Elina", "Igor"],
    };
  },
  computed: {
    filterNames() {
      return this.names.filter((qalam) => {
        return (
          qalam.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
        );
      });
    },
  },
};
