import axiosClient from "./axiosClient";


    
   export const getAll = async () => {
      const url = '/post/all';
      return await axiosClient.get(url);
    }

    export const getCenterPost = async () => {
      const url = '/post/center';
      return await axiosClient.get(url);
    }
    
    export const getSidePost= async() => {
      const url = '/post/side';
      return await axiosClient.get(url);
    }

    export const PaginationApi= async(currentPage:number ) => {
      const url = `/post/pagination?page=${currentPage}&limit=8`;
      return await axiosClient.get(url);
    }


    export const createPost= async (data:any) => {
      const url = '/post';
      return await axiosClient.post(url,data);
    }

    export const getPostId = async (postId: number ) => {
      const url = `/post/${postId}`;
      return await axiosClient.get(url );
    }

    export const updatePost = async (id: any) => {
      const url = `/post/${id}`;
      return await axiosClient.put(url);
    }

    export const deletePost = async (id: any) => {
      const url = `/post${id}`;
      return await axiosClient.put(url);
    }

    


  
