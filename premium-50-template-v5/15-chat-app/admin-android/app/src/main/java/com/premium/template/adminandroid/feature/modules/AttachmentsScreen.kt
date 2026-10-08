package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun AttachmentsScreen(onCreate:()->Unit){Card{Column{Text("Attachments");Text("Domain-specific attachments workflow");Button(onClick=onCreate){Text("Create")}}}}
