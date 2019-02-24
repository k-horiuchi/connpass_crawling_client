<template>
  <div id="app">
          <template>
          <v-data-table :items="json_data" :headers="headers" class="elevation-1">
            <template slot="items" slot-scope="props">
              <td v-html="props.item.event_title"></td>
              <td class="text-xs-right">{{ props.item.event_place }}</td>
              <td class="text-xs-right">{{ props.item.convene_date }}</td>
              <td class="text-xs-right">{{ props.item.disclosure_date }}</td>
              <td class="text-xs-right">{{ props.item.capacity }}</td>
            </template>
          </v-data-table>
        </template>
  </div>
</template>

