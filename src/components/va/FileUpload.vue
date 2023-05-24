
<template>
<div>
    
          <v-flex
            xs12
            class="text-xs-center text-sm-center text-md-center text-lg-center">
            <div>
            <template  v-if="imageUrl">
              <img
              :src="imageUrl"
              @click="pickFile"
              style="width: 100%">
            </template>
            <template  v-else>
              <div>
              <img
              :src="noImage"
              @click="pickFile"
              style="width: 100%">
            </div>
              <span class="text-xs-center text-caption">Upload Photo / Logo</span>
            </template>
            
           
            </div>
            <v-progress-linear
              v-if="uploadprogress == true"
              :indeterminate="true"/>
            <v-text-field
              v-model="imageName"
              style="display: none"
              label="Upload Logo"
              prepend-icon="mdi-paperclip"
              />
            <input
              
              ref="image"
              type="file"
              style="display: none"
              accept="image/*"
              @change="onFilePicked"
            >
          </v-flex>
       </div>
  </template>
  <script>
  import md5 from 'md5'
  //const getOrientedImage = require('exif-orientation-image')
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      },
      preset: {
        type: String,
        default: ""
      }
    },
    data: () => ({
      noImage: require('@/assets/no-image-icon.png'),
      snackbar: false,
      alert: '',
      snackbarcolor: '',
      imageName: '',
      imageFile: '',
      imageUrl: '',
      completeupload: false,
      uploadprogress: false
    }),
    computed: {
  
    },
    watch: {
      preset(v) {
        this.imageUrl = v
      }
    },
    created () {
     // this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
    },
    methods: {
      showAlert (message, color) {
        this.snackbar = true
        this.alert = message
        this.snackbarcolor = color
        setTimeout(() => {
          this.snackbar = false
        }, 4000)
      },
      pickFile () {
        this.$refs.image.click()
      },
      emitToParent (event) {
        this.$emit('UploadEvent', event)
        //this.resetUpload()
      },
          onFilePicked (e) {
        const files = e.target.files
        if (files[0] !== undefined) {
          this.imageName = files[0].name
          if (this.imageName.lastIndexOf('.') <= 0) {
            return
          }
          const fr = new FileReader()
          fr.readAsDataURL(files[0])
          fr.addEventListener('load', () => {
            this.imageUrl = fr.result
            this.imageFile = files[0] // this is an image file that can be sent to server...
            this.emitToParent(this.imageUrl)
          })
        } else {
          this.imageName = ''
          this.imageFile = ''
          this.imageUrl = ''
        }
      },
      resetUpload () {
        this.imageName = ''
        this.imageFile = ''
        this.imageUrl = this.noImage
        this.completeupload = false
        this.uploadprogress = false
      },
      FileUpload () {
        this.uploadprogress = true
        if (this.imageFile.type.search('image') == -1) {
          this.showAlert('Media not supported!', 'warning')
          this.uploadprogress = false
          return
        }
        let ext = this.imageFile.name.split('.')
        ext = ext[ext.length - 1]
        let _filename = md5(this.imageFile.name)
        let data = {
          filename: _filename + '.' + ext,
          data: this.imageUrl,
          file_type: this.imageFile.type,
          size: this.imageFile.size.toString(),
          title: this.imageFile.name,
          method: this.Module
        }
  
        this.$http.post('media/upload', data).then(response => {
          this.uploadprogress = false
          this.showAlert('Image succesfully upload!', 'success')
          this.completeupload = true
          response.data.data != null ? this.media = response.data.data : console.log()
          this.mediaUrl = this.media.method + '/' + _filename + '.' + ext
          console.log(this.mediaUrl)
        }).catch(e => {
          console.log(e.data)
        })
      }
    }
  }
  </script>
  