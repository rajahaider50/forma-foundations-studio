package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun ContactsScreen(onCreate:()->Unit){Card{Column{Text("Contacts");Text("Domain-specific contacts workflow");Button(onClick=onCreate){Text("Create")}}}}
