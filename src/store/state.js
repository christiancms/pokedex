import Vue from "vue";
import { reactive } from 'vue';

const LIMIT = 25;
const OFFSET = 0;

// reactive variables
export default reactive({
	list: [],
	tmpList: [],
	listHasNext: false,
	listHasCompleted: false,
	listHasError: false,

	isSearching: false,
	isPokemonSearch: false,
	searchHasError: false,

	limit: LIMIT,
	offset: OFFSET,

	pokemonId: null,
});
