package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun FormsScreen(onCreate:()->Unit){Card{Column{Text("Forms");Text("Domain-specific forms workflow");Button(onClick=onCreate){Text("Create")}}}}
