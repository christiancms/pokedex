<template>
		<div class="panel bg--red-01">
			<LeftPanelContent />
		</div>
</template>

<script>
import LeftPanelContent from './LeftPanelContent.vue';
import MainTitle from '../MainTitle/MainTitle.vue';

export default {
	name: 'LeftPanel',
	components: {
		LeftPanelContent,
		MainTitle,
	},
};
</script>

<style lang="scss" scoped>
.panel {
	display: flex;
	width: 100%;
	padding: 85px 20px 20px;

	@media (min-width: $viewport-medium) {
		width: calc(50% + 20px);
		padding-right: 60px;
	}
}
</style>