import { Client, Storage, Databases, Query, ID } from "appwrite";
import conf from "../conf/conf";

class Service {
   client = new Client();
   bucket;
   database;
   constructor() {
      this.client
         .setEndpoint(conf.appwriteURL)
         .setProject(conf.appwriteProjectId);
      this.database = new Databases();
      this.bucket = new Storage();
   }
   async createPost({ title, slug, content, featuredImage, status, userId }) {
      try {
         return await this.database.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
               title,
               content,
               featuredImage,
               status,
               userId,
            }
         );
      } catch (error) {
         throw error;
      }
   }
   async updatePost(slug, { title, content, featuredImage, status }) {
      try {
         return await this.database.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
               title,
               featuredImage,
               status,
               content,
            }
         );
      } catch (error) {
         throw error;
      }
   }
   async deletePost(slug) {
      try {
         return await this.database.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
         );
      } catch (error) {
        throw error;
      }
   }
   async listPost(quires = [Query.equal("status", "public")]){
    try {
        return await this.database.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            quires,
        )
    } catch (error) {
        throw error;
    }
   }
   async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            throw error;
        }
   }
   
   async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            throw error;
        }
   }

   async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            );
        } catch (error) {
            throw error
        }
   }
   getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            throw error;
        }
   }
}

const service = new Service();
export default service;