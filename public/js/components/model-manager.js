/**
 * Model Manager Component
 * Handles model mapping editing in Settings > Models tab
 * Registers itself to window.Components for Alpine.js to consume
 */
window.Components = window.Components || {};

window.Components.modelManager = () => ({
    editingModelId: null,

    isEditing(modelId) {
        return this.editingModelId === modelId;
    },

    startEditing(modelId) {
        this.editingModelId = modelId;
    },

    stopEditing() {
        this.editingModelId = null;
    },

    async updateModelConfig(modelId, configUpdates) {
        return window.ModelConfigUtils.updateModelConfig(modelId, configUpdates);
    }
});
