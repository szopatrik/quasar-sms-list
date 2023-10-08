<template>
  <div>
    <div class="q-pa-md" style="width: 800px">
      <q-list bordered>
        <div
          v-for="message in messages"
          :key="message.id"
          class="message"
        >
          <q-expansion-item group="somegroup"
                            :label="getMessageLabel(message)"
                            :caption="getMessageCaption(message)"
                            header-class="text-teal">
            <q-card>
              <q-card-section>
                {{ message.body }}
              </q-card-section>
            </q-card>

            <div class="row">
              <div class="col-9">
                <q-input
                  v-model="reply"
                  filled
                  type="textarea"
                  class="inputRowTextArea"
                />
              </div>
              <div class="col-3">
                <q-btn class="sendReplyButton col-3" label="Send" @click="sendReply"/>
              </div>
            </div>

          </q-expansion-item>
        </div>
      </q-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import {messages} from 'src/data/messages';
import {TextMessage} from 'components/models';
import {onMounted, ref, watchEffect} from 'vue';

const textMessages = ref<TextMessage[]>();
const reply = ref<string>('');

onMounted(()=>{
  getMessages()
})

watchEffect(() => {
  const sortedMessages = messages.sort((a, b) => new Date(b.messageDt).getTime() - new Date(a.messageDt).getTime());
  textMessages.value = sortedMessages;
});

const getMessages = (): void => {
  /*
  This would be a call to Rest API with Axios or some Rest helper function.
  It could be placed here or in some "services" folder depending on the project structure.
  */
  textMessages.value = messages
}

const getMessageLabel = (message: TextMessage): string => {
  console.log(message.messageDt)
  const date = new Date(message.messageDt).toLocaleString('CS', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  const targetNumber = message.targetNumber;
  return `${targetNumber} on ${date}`;
};

const getMessageCaption = (message: TextMessage): string => {
  const shortenedBody = message.body.slice(0, 75) + (message.body.length > 50 ? '...' : '');
  return shortenedBody;
};

const sendReply = () => {
  // Send the reply using Axios or some Rest helper function.
  reply.value = '';
};


</script>

<style scoped lang="scss">
.message {
  border: 1px solid #ccc;
  padding: 5px;
  cursor: pointer;
}

.message-label {
  display: flex;
  justify-content: space-between;
}

.message-label-date {
  font-weight: bold;
}

.message-label-body {
  flex-grow: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-left: 10px;
}

.inputRowTextArea {
  margin: 10px;
}

.sendReplyButton {
  margin: 108px 10px 10px;
}
</style>
